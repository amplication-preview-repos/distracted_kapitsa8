import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const ComplaintList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Complaints"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
