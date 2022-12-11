export interface Template {
  id?: string;
  creator?: string;
  modifier?: string;
  createdDate?: Date;
  modifiedDate?: Date;
  obsolete?: boolean;
}

export interface Token {
  access_token: string;
  email: string;
  expires_in: number;
  firstName: string;
  id: string;
  jti: string;
  lastName: string;
  mobilePhoneNumber: string;
  scope: string;
  token_type: string;
}

export interface HypermediaResponse<T> {
  _embedded: Embedded<T>;
  _links: any;
  page: any;
}

export interface Embedded<T> {
  results: T[];
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE'
}

export enum PostCategory {
  NOTICE = 'NOTICE',
  JOB = 'JOB',
  EVENT = 'EVENT'
}

export enum CommonTypes {
  ACTIVE = 'ACTIVE',
  EVENT = 'EVENT',
  NOTICE = 'NOTICE',
  JOB = 'JOB',
  CONFIRM = 'CONFIRM',
  FAVORITES = 'FAVORITES',
  SUPER_ADMIN = 'SUPER_ADMIN',
  APPLIED_JOBS = 'APPLIED_JOBS',
  TERMS_CONDITIONS = 'TERMS_CONDITIONS',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  RESUME = 'RESUME',
  COVER_LETTER = 'COVER_LETTER',
  SUBMIT = 'SUBMIT',
  LOGGED = 'LOGGED'
}

export interface User extends Template {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  mobilePhoneNumber: string;
  emailVerified: boolean;
  mobilePhoneNumberVerified: boolean;
  title: string;
  workMobileNumber: string;
  extension: string;
  organization: Organization;
  password: string;
  oneTimePassword: string;
  refKey: string;
  twoFactorAuthenticationDisabled: boolean;
  primaryContact: boolean;
  configured: boolean;
  passwordChangedTime: string;
  tempPasswordSent: boolean;
  verifyEmailSent: boolean;
  userStatus: UserStatus;
}

export interface UserDetail extends User {
  userPermission: UserPermission;
  notificationPermission: NotificationPermission;
}

export interface UserOption extends UserDetail {

  OrganizationTypeOptions: Array<OrganizationType>

}

export interface UserPermission extends Template {
  authorities: any [];
  user: User;
}

export interface NotificationPermission extends Template {
  user: User;
  smsNotificationEnabled: boolean;
  emailNotificationEnabled: boolean;
}

export interface OrganizationType extends Template {
  name: string;
}

export interface Organization extends Template {
  name: string;
  state: string;
  county: string;
  city: string;
  organizationType: OrganizationType;
  website: string;
  organizationStatus: OrganizationStatus;
  isVerifiedClient: boolean;
  isPreApprovedPosts: boolean;
  organizationPermissionType: OrganizationPermissionType;
}

export enum OrganizationStatus {
  PENDING, APPROVED, SUSPEND
}

export interface Credentials {
  username: string;
  password: string;
}

export class Page {
  size: number = 0;
  totalElements: number = 0;
  totalPages: number = 0;
  pageNumber: number = 0;
}

export enum LangType {
  EN = 'EN',
  SP = 'SP'
}

export interface Post extends Template {
  author: string;
  postCategory: | 'NOTICE' | 'JOB' | 'EVENT';
  status: | 'ACTIVE' | 'DRAFT' | 'EXPIRED' | 'PENDING';
  title: string;
  content: string;
  titleSpanish: string;
  contentSpanish: string;
  zip: string;
  state: string;
  city: string;
  location: string;
  favouriteAdded: boolean;
  jobApplied: boolean;
  activePeriod: string;
  eventDateTime: Date;
  startDate: Date;
  endDate: Date;
  eventLocation: Location;
  propertyLocation: Location;
  publicMeetingLocation: Location;
  pendingStatus: | 'AWAITING_REVIEW' | 'NEEDS_CHANGES';
}

export interface PostDetail extends Post {
  organization: Organization;
  postType: PostType;
  tags: Array<Tag>;
  attachments: Array<Attachment>
  isJobApplied: boolean
  favouriteID: string
}

export interface Location extends Template {
  longitude: number;
  latitude: number;
  address: string;
  post: Post
}

export interface PostOption extends PostDetail {
  postTypeOptions: Array<PostType>;
}

export interface PostType extends Template {
  name: string;
  postCategory: | 'NOTICE' | 'JOB' | 'EVENT';
  isApproved: boolean;
}

export interface Attachment extends Template {
  name: string;
}

export interface Tag extends Template {
  name: string;
}

export interface PublicDetail extends Template {
  privacyPolicy: string;
  termsAndConditions: string;
  address: string;
  email: string;
  phone: string;
}

export enum OrganizationPermissionType {
  SUPER_ADMIN = 'SUPER_ADMIN', CITY_ADMIN = 'CITY_ADMIN'
}

export interface Visitor extends Template {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhoneNumber: string;
  emailVerified: boolean;
  mobilePhoneNumberVerified: boolean;
  password: string;
  oneTimePassword: string;
  tempPasswordSent: boolean;
  verifyEmailSent: boolean;
  darkMode: boolean;
  active: boolean;
  refKey: string;
  twoFactorAuthenticationDisabled: boolean;
  passwordChangedTime: string;
}

enum JobApplicationStatus {
  ACTIVE, SHORTLISTED, REJECTED
}

export interface JobApplication extends Template {
  visitor: Visitor;
  resume: string;
  coverLetter: string;
  post: Post;
}

export interface VisitorFavourites extends Template {
  visitor: Visitor;
  post: Post;
}
