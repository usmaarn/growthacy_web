import {UserStatus, UserType} from "@/lib/enums";

export type NewUserSchema = {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    type: "admin"|"company"|"ambassador";
    emailVerifiedAt: Date;
    phoneVerifiedAt: Date;
    referralCode: string;
    status: "active"|"suspended"|"banned";
}


export type Campaign = {
    id: number;
    name: string;
    description: string;
    status: "active"|"inactive";
    startDate: Date;
    endDate: Date;
    type: "fixed"|"progressive";
    rewardPerReferral: number;
    createdAt: Date;
    updatedAt: Date;
}