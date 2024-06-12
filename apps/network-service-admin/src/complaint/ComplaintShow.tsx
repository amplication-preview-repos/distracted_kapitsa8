import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const ComplaintShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
