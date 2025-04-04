interface Badge extends BaseEntity {
  label: string;
  body: string;
  logo: string;
}

interface BadgeFormFields {
  label: string;
  body: string;
  logo?: File;
}

interface BadgeEditablePayload {
  label: string;
  body: string;
  logo?: File;
}
