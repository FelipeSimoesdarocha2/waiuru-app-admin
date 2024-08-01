// Next
import { StaticImageData } from 'next/image';

// React
import { ReactNode } from 'react';

// Firebase
import { UserCredential } from 'firebase/auth';

export enum RolesEnum {
  ADMIN = 'condominium_administrator',
  RESIDENT = 'resident',
  CONDOMINIUM = 'condominium',
}

export enum ModulesEnum {
  DASHBOARD = 'DashboardModule',
  CHAT = 'ChatModule',
  HOME = 'HomeModule',
  ACESSCONTROL = 'AccessControlModule',
  VISITORS = 'VisitorsModule',
  ORDER = 'OrderModule',
  VEHICLES = 'VehiclesModule',
  RESIDENTS = 'ResidentsModule',
  ANIMALS = 'AnimalsModule',
  ONLINEVOTING = 'OnlineVotingModule',
  EMPLOYEE = 'EmployeeModule',
  RESIDENTINVITE = 'ResidentInviteModule',
  EMPLOYEES = 'EmployeesModule',
  ORDERS = 'OrdersModule',
  FINANCIAL = 'FinancialModule',
  BOOKOCCURRENCES = 'BooksOccurrencesModule',
  LOSTANDFOUND = 'LostAndFoundModule',
  FEED = 'FeedModule',
  INTERNALREGULATIONS = 'InternalRegulationsModule',
  INTERNALPOLICIES = 'InternalPoliciesModule',
  PRIVACYPOLICY = 'PrivacyPolicyModule',
  USETERMS = 'UseTermsModule',
  ADVERTISEMENTS = 'AdvertisementsModule',
  ONLINEVOTINGS = 'OnlineVotingsModule',
  SERVICEPROVIDER = 'ServiceProviderModule',
  LISTRESIDENTS = 'ListResidentsModule',
  RECREACTIONAREA = 'RecreationAreaModule',
  ACTIVITIES = 'ActivitiesModule',
  SETTINGS = 'SettingsModule',
}

export interface FirstAccessProps {
  condominium_name: string;
  number_of_blocks: number;
  photo: string;
  address: string;
  uf: string;
  city: string;
  zip_code: string;
  description: string;
  email: string;
  password: string;
  country: string;
  phone: string;
}
type Document = {
  status: number;
  type: string;
  url?: string;
};

export interface FirstAccessScreenProps {
  session: {
    name: string;
    photo: string;
  };
}

type Vehicle = {
  id: string;
  type: string;
  maker: string;
  model: string;
  plate: string;
  status: number;
  user_id: string;
  images: null | string[];
};

type Animal = {
  id: string;
  type: string;
  breed: string;
  name: string;
  status: number;
  user_id: string;
  images: null | string[];
  born: string;
  sex: string;
  color: string;
};

export type Condominium = {
  id: string;
  uuid: string;
  name: string;
  email: string;
  address: string;
  phone_number: string;
  status: number;
  role: string;
  created_at?: string;
};

export type DocumentDto = {
  type: string;
  path: string;
  resident?: string;
};

export type VehicleDto = {
  type: string;
  maker: string;
  model: string;
  plate: string;
};

export type DeficiencyDto = {
  type: string;
};

export type AnimalDto = {
  type: string;
  breed: string;
  name: string;
};

export type CondominiumDto = {
  uuid: string;
  name: string;
  email: string;
  address: string;
  phone_number: string;
  created_at: string;
  role: string;
  status: number;
};

export type User = {
  user: GetUserById;
};

export type userLogin = {
  id: string;
  uuid: string;
  parent: any | null;
  name: string;
  cpf: string;
  phone_number: string;
  email: string;
  password: string;
  status: number;
  activated: number;
  documents: DocumentDto[];
  vehicles: VehicleDto[] | null;
  additional_residents: userLogin[];
  deficiencies: DeficiencyDto[] | null;
  animals: AnimalDto[] | null;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  email_verified_at: string;
  role: RolesEnum | null;
  condominium: CondominiumDto;
  condominium_id: string;
  invitation_id: string;
};

export type userLoginById = {
  uid: string;
  email: string;
  emailVerified: true;
  displayName: string;
  isAnonymous: boolean;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

export type GetUserById = {
  id: string;
  uuid: string;
  name: string;
  phone_number: string;
  email: string;
  documents: Document[];
  vehicles: Vehicle[];
  animals: Animal[];
  deficiencies: null | string;
  parent: string;
  status: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  email_verified_at: string;
  role: RolesEnum;
  condominium: Condominium;
  condominium_id: string;
  invitation_id: string;
  is_temporary_user: boolean;
  checking_at: string;
  checkout_at: string;
  checkout_date: string;
  is_billable_user: boolean;
};

export type userLoginByFireBase = UserCredential & {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
  providerId: string | null;
  _tokenResponse: {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: string;
  };
  operationType: string;
};
// Fecha_Tem q Rever

export type Address = {
  cep: string;
  uf: string;
};

export enum LoginResponseDto {
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
}

export enum ToastTypeEnum {
  ERROR = 'error',
  WARN = 'warn',
  SUCCESS = 'success',
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserPassword {
  newPassword: string;
}

export interface IUserLoginAndPassword extends IUserLogin, IUserPassword { }

export interface LoginFormProps {
  onClickGoBack: () => void;
}

export interface ForgotPasswordProps {
  onClickGoBack: () => void;
}

export interface NewPasswordProps {
  oobCode: string;
}

export interface ILoginContainerProps {
  isMobile?: boolean;
}

export interface LayoutProps {
  selectedKey?: string;
  children?: ReactNode;
}

export interface AccessControlProps {
  name: string;
  email: string;
}

export interface VisitorsProps {
  name: string;
  email: string;
  date_start: string;
  date_finish: string;
  time_start: string;
  time_finish: string;
  type: string;
  resident_id: string;
  resident_name: string;
  status: string;
}

export interface CreateVisitorsProps {
  name: string;
  email: string;
  date_start: string;
  date_finish: string;
  password: string;
  condominium_id: string;
  status: VisitorsStatus;
  resident_id: string;
  resident_name: string;
  type: string;
}

export enum VisitorsStatus {
  ACTIVATED = 'ACTIVATED',
  DISABLED = 'DISABLED',
}

export enum VisitorsType {
  BUSINESS = 'BUSINESS',
  Person = 'Person',
  Contractor = 'Contractor',
}

export interface OrderProps {
  receiver_name: string;
  provider_name: string;
  condominium_name: string;
  condominium_id: string;
  package_info: string;
  package_code: string;
  signed: string;
  delivery_date: string;
  delivery_hour: string;
  images: any;
}

export enum OrdersStatus {
  CONCIERGE = 'concierge',
  DELIVERED = 'delivered',
}

export interface CreateOrderProps {
  provider_name: string;
  receiver_name: string;
  picked_up_by_name: string;
  status: OrdersStatus;
  condominium_name: string;
  condominium_id: string;
  package_info: string;
  package_code: string;
  user_id: string;
  delivery_date: string;
  images?: string[];
}

export interface UpdateOrderProps {
  id: string;
  status: CardServiceStatusOrder;
  provider_name: string;
  condominium_name: string;
  condominium_id: string;
  user_id: string;
  delivery_date: string;
  pickup_date: string;
  picked_up_by_name: string;
  package_info: string;
  package_code: string;
  receiver_name: string;
}

export interface VehiclesProps {
  name_property: string;
  type: string;
  model: string;
  plate: string;
  color: string;
  resident_name: string;
  resident_id: string;
  maker: string;
}

export interface CreateVehiclesProps {
  name_property: string;
  type: typeVehicle;
  model: string;
  plate: string;
  color: string;
  resident_name: string;
  maker: string;
  status: number;
  condominium_id: string;
  user_id: string;
  images: string[];
}

export enum typeVehicle {
  CAR = 'CAR',
  MOTORCYCLE = 'MOTORCYCLE',
  BIKE = 'BIKE',
  TRUCK = 'TRUCK',
  BUSS = 'BUSS',
}

export interface BookOccurrencesProps {
  suggestion: string;
  subject: string;
  local: string;
  summary: string;
  image: string;
}

export interface CreateBookOccurrencesProps {
  location: string;
  incident: string;
  type: string;
  date: string;
  summary: string;
  condominium_id: string;
  images: string[];
}

export interface ResidentsProps {
  condominium_id: string;
  document_number: string;
  name: string;
  email: string;
  resident_linked: string;
  password: string;
  role: string;
}

export interface CreateResidentsProps {
  name: string;
  document_number: string;
  email: string;
  condominium_id: string;
  password: string;
  role: string;
}

export interface EmployeeProps {
  name: string;
  email: string;
  phone: string;
  work_card: string;
  driving_license: string;
  voter_id: string;
  cpf: string;
  date_of_birth: string;
  admission_date: string;
  zipcode: string;
  address: string;
  city: string;
  employee_activity: string;
  working_day: string;
  emergency_contact: string;
}

export interface CreateFeedProps {
  title: string;
  description: string;
  condominium_id: string;
  user_id: string;
}

export interface AnimalsProps {
  type: string;
  breed: string;
  name: string;
  status: number;
  images: string[];
  born: string;
  sex: string;
  color: string;
  resident_linked_pet: string;
  resident_id: string;
  resident_name: string;
}
export interface CreateAnimalsProps {
  type: TypeAnimal;
  breed: string;
  name: string;
  status: number;
  images: string[];
  born: string;
  user_id: string;
  responsibleName: string;
  color: string;
  condominium_id: string;
}

export enum TypeAnimal {
  DOG = 'DOG',
  CAT = 'CAT',
  BIRD = 'BIRD',
  FISH = 'FISH',
  REPTILE = 'REPTILE',
  OTHERS = 'OTHERS',
}

export interface OnlineVotingProps {
  name: string;
  description: string;
  condominium_id: string;
  start_date: string;
  end_date: string;
  status: string;
  create_by: string;
}

export interface UpdateOnlineVotingProps {
  id: string;
}

export enum EmployeeRoleProps {
  employee = 'employee',
}

export interface CreateEmployeeProps {
  name: string;
  email: string;
  status: number;
  password: string;
  phone_number: string;
  document_number: string;
  condominium_id: string;
  role: EmployeeRoleProps;
  documents: DocumentsProps[];
  rg_number: string;
  ctps: string;
  voter_registration: string;
  born_date: string;
  admission_date: string;
  zip_code: string;
  street: string;
  city: string;
  occupation_area: string;
  emergency_phone_number: string;
  working_day: string;
}

export enum DocumentTypeProps {
  PROFILE_PICTURE = 'PROFILE_PICTURE',
}
export interface DocumentsProps {
  type: DocumentTypeProps.PROFILE_PICTURE;
  path: string;
  url: string;
  local: string;
}

export interface Column {
  key: string;
  title: string;
  dataIndex: string;
}

export interface DataItemTableChat {
  id: number;
  user: string;
  time: string;
  message?: string;
  status: boolean;
  perfilImage?: StaticImageData | null;
}

export interface DataItemTableResidents {
  id: string;
  name: string;
  perfilImage: StaticImageData | null;
  condominium: {
    address: string;
  };
  pet: boolean;
  car: boolean;
  registration_status: string;
  role: RolesEnum;
  created_at: string;
}

export interface DataItemTableAccessControl {
  id: number;
  name: string;
  vehicle: string;
  perfilImage: StaticImageData | null;
  local: string;
  access_time: string;
  category: string;
}

export interface DataItemTableOrders {
  id: number;
  name: string;
  status: string;
  delivery_date: string;
  condominium_id: string;
  condominium_name: string;
  package_code: string;
  package_info: string;
  picked_up_by_name: '';
  pickup_date: string;
  provider_name: string;
  receiver_name: string;
  user_id: string;
}

export interface DataItemTableLostAndFound {
  name: string;
  description: string;
  user_id_found: string;
  location_lost: string;
  date_lost: string;
  user_id_lost: string;
  location_found: string;
  date_found: string;
  type: string;
  qrCode: string;
  condominium_id: string;
  images: string;
}

export interface DataItemTableSettings {
  id: number;
  name: string;
  perfilImage?: StaticImageData | null;
}

export interface DataItemTableBookOccurrences {
  id: string;
  admin_name?: string;
  admin_response?: string;
  date: any;
  documents: { path: string; type: string }[];
  incident: string;
  location: string;
  type: CardServiceTypeOccurrence | string;
  status: CardServiceStatusOccurrence;
  summary: string;
  images: string[];
}

export interface DataItemTableFeed {
  id: number;
  title: string;
  type: string;
  description: string;
}

export enum CardServiceTypeOccurrence {
  COMPLAINT = 'complaint',
  SUGGESTION = 'suggestion',
  OBSERVATION = 'observation',
}

export enum CardServiceStatusOccurrence {
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
}

export enum CardServiceStatusOrder {
  CONCIERGE = 'concierge',
  DELIVERED = 'delivered',
}

export type OrderDto = {
  id: string;
  status: CardServiceStatusOrder;
  provider_name: string;
  condominium_name: string;
  condominium_id: string;
  user_id: string;
  delivery_date: string;
  pickup_date: string;
  picked_up_by_name: string;
  package_info: string;
  package_code: string;
  receiver_name: string;
};

export type LostAndFoundDto = {
  id: string;
  name: string;
  condominium_id: string;
  date_found: string;
  date_lost: string;
  description: string;
  images: string;
  location_found: string;
  location_lost: string;
  qr_code: string;
  type: string;
  user_id_found: string;
  user_id_lost: string;
};

export interface CreateLostAndFoundProps {
  name: string;
  description: string;
  user_id_lost: string;
  location_lost: string;
  date_lost: string;
  user_id_found: string;
  type: string;
  qrCode: string;
  condominium_id: string;
  images?: string;
}

export interface UpdateLostAndFoundProps {
  id: string;
  status: string;
  location: string;
  incident: string;
  date: string;
  admin_response: string;
  admin_name: string;
  summary: string;
  documents: string;
  images?: [];
  condominium_id: string;
  type: string;
}
export interface DataItemTableOnlineVotings {
  condominium_id: string;
  create_by: string;
  description: string;
  end_date: string;
  id: string;
  name: string;
  no_percentage: number;
  start_date: string;
  status: string;
  yes_percentage: number;
}

export type ArchiveDto = {
  fileSize: string;
  assetId: string;
  width: string;
  type: string;
  height: string;
  fileName: string;
  uri: string;
  base64: string | null;
  exif: string | null;
  duration: number | null;
};

export type ArchiveRequestDto = {
  file: any | null;
  type: string;
};

export interface RecreationAreaProps {
  type: string;
  name: string;
  price: number;
  description: string;
  specifications: string;
  roles: string;
  status: string;
  need_to_schedule: string;
  opening_hours: string;
  condominium_id: string;
  images: string[];
}

export interface AdvertisementsProps {
  name: string;
  description: string;
  price: number;
  is_free: string;
  specifications: string;
  roles: string;
  privacy_policy: string;
  condominium_id: string;
  type: string;
}

export interface CreateAdvertisementsProps {
  name: string;
  description: string;
  price: number;
  is_free: string;
  specifications: string;
  roles: string;
  privacy_policy: string;
  condominium_id: string;
  type: string;
}

export interface CreateCondoProps {
  email: string;
  name: string;
  password: string;
  address: string;
  admin_id: string;
  phone_number: string;
  country: string;
}

export interface CondominiumProps {
  id: string;
  uuid: string;
  admin_id: string;
  name: string;
  payment_gateway_email: string;
  payment_gateway_is_card_payment_enabled: boolean;
  payment_gateway_is_transfer_enabled: boolean;
  payment_gateway_country: string;
  payment_gateway_account_type: string;
  payment_gateway_account_id: string;
}

export type Chat = {
  id?: string;
  actions: string;
  users: ChatUser[];
  messages: Message[] | [] | null;
  user_ids: string[];
};

export type ChatUser = {
  id: string;
  role: RolesEnum;
  name: string;
  profile_pic: string;
};

export type Message = {
  content_type: string;
  id: any;
  is_forwarded: boolean;
  is_read: boolean;
  message: string;
  parent: string;
  sent_at: string | Date;

  sent_by_id: string;
  sent_by_role: string;
};

export type ChatUpdate = {
  id: string;
  actions: string;
  users: ChatUser[];
  messages: Message;
  user_ids: string[];
};

export interface CreateResidentInviteDto {
  condominium_user_id: string;
  condominium_name: string;
  type_resident: string;
  role: string;
  condominium_unit_id: string;
}

export type CreateLostAndFoundDto = {
  name: string;
  description: string;
  user_id_lost: string;
  location_lost: string;
  date_lost: string | null;
  user_id_found: string;
  location_found: string;
  date_found: string | null;
  type: string;
  qrCode: string;
  condominium_id: string;
  images: string[];
};

export type UpdateLostAndFoundDto = {
  id: string;
  name: string;
  description: string;
  user_id_lost: string;
  location_lost: string;
  date_lost: string | null;
  user_id_found: string;
  location_found: string;
  date_found: string | null;
  type: string;
  qrCode: string;
  condominium_id: string;
};
