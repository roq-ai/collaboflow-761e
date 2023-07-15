import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { videoConferenceValidationSchema } from 'validationSchema/video-conferences';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.video_conference
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getVideoConferenceById();
    case 'PUT':
      return updateVideoConferenceById();
    case 'DELETE':
      return deleteVideoConferenceById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getVideoConferenceById() {
    const data = await prisma.video_conference.findFirst(convertQueryToPrismaUtil(req.query, 'video_conference'));
    return res.status(200).json(data);
  }

  async function updateVideoConferenceById() {
    await videoConferenceValidationSchema.validate(req.body);
    const data = await prisma.video_conference.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteVideoConferenceById() {
    const data = await prisma.video_conference.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
