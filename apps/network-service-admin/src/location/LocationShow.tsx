import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LOCATION_TITLE_FIELD } from "./LocationTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bandwidth" source="bandwidth" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Registered Email" source="registeredEmail" />
        <TextField label="Router IP" source="routerIp" />
        <TextField label="Status" source="status" />
        <TextField label="Status Since" source="statusSince" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WAN IP" source="wanIp" />
        <ReferenceManyField
          reference="Complaint"
          target="locationId"
          label="Complaints"
        >
          <Datagrid rowClick="show">
            <TextField
              label="complaintCreationTime"
              source="complaintCreationTime"
            />
            <TextField label="complaintStatus" source="complaintStatus" />
            <TextField
              label="complaintStatusOption"
              source="complaintStatusOption"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="creationTime" source="creationTime" />
            <TextField label="creationTimestamp" source="creationTimestamp" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="statusOfComplaint" source="statusOfComplaint" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
