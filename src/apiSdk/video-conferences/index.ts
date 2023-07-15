import axios from 'axios';
import queryString from 'query-string';
import { VideoConferenceInterface, VideoConferenceGetQueryInterface } from 'interfaces/video-conference';
import { GetQueryInterface } from '../../interfaces';

export const getVideoConferences = async (query?: VideoConferenceGetQueryInterface) => {
  const response = await axios.get(`/api/video-conferences${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createVideoConference = async (videoConference: VideoConferenceInterface) => {
  const response = await axios.post('/api/video-conferences', videoConference);
  return response.data;
};

export const updateVideoConferenceById = async (id: string, videoConference: VideoConferenceInterface) => {
  const response = await axios.put(`/api/video-conferences/${id}`, videoConference);
  return response.data;
};

export const getVideoConferenceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/video-conferences/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVideoConferenceById = async (id: string) => {
  const response = await axios.delete(`/api/video-conferences/${id}`);
  return response.data;
};
