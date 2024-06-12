import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LocationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Locations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
