import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  PasswordInput,
  TextInput,
} from "react-admin";

export const EcommerceAdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <PasswordInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
