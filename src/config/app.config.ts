interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Project Manager'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Project Manager', 'Team Member', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'CollaboFlow',
  addOns: ['notifications', 'chat', 'file'],
};
