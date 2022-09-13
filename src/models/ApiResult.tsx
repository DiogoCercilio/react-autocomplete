export interface ApiResultItem {
    id: number
    uid: string
    password: string
    first_name: string
    last_name: string
    username: string
    email: string
    avatar: string
    gender: string
    phone_number: string
    social_insurance_number: string
    date_of_birth: string
    employment: string
    address: string
    credit_card: string
    subscription: string
    visible?: boolean
    highlight?: string[]
  }

  export interface AutoCompleteProps {
    data: ApiResultItem[],
    onChooseItem: any,
    onClickHandler: any
  }