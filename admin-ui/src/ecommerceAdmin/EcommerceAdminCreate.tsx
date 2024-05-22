import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  PasswordInput,
  TextInput,
} from "react-admin";

export const EcommerceAdminCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <PasswordInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
