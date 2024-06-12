import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ComplaintTitle } from "../complaint/ComplaintTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Bandwidth" source="bandwidth" />
        <ReferenceArrayInput
          source="complaints"
          reference="Complaint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput
          label="Registered Email"
          source="registeredEmail"
          type="email"
        />
        <TextInput label="Router IP" source="routerIp" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Status Since" source="statusSince" />
        <TextInput label="WAN IP" source="wanIp" />
      </SimpleForm>
    </Edit>
  );
};
