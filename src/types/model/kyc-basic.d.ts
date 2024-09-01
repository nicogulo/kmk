interface KycBasicPayload {
    identity_card: string;
    full_name: string;
    date_of_birth: string;
    place_of_birth: string;
    npwp?: string;
    occupation?: string;
    average_yearly_income?: string;
    source_of_fund?: string;
    purpose_of_account_opening?: string;
    gender: string;
    occupation_other?: string;
    source_of_fund_other?: string;
}
