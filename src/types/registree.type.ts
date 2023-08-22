export type Registree = {
  uuid: string;
  lastName: string;
  firstName: string;
  contactEmail: string;
  contactNumber: string;
  company: string | null;
  salesforceUser: boolean;
  salesforceUserRole: string | null;
  status: Status;
  deleted: boolean;
  updatedAt: Date;
  createdAt: Date;
};

export type Status = 'PENDING' | 'PAID' | 'ATTENDED';

export type RegistreeStat = {
  totalCount: number;
  pendingCount: number;
  paidCount: number;
  attendedCount: number;
  salesforceUsers: number;
};
