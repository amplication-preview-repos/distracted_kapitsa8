/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumComplaintComplaintStatus } from "./EnumComplaintComplaintStatus";
import { EnumComplaintComplaintStatusOption } from "./EnumComplaintComplaintStatusOption";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { EnumComplaintStatus } from "./EnumComplaintStatus";
import { EnumComplaintStatusOfComplaint } from "./EnumComplaintStatusOfComplaint";

@InputType()
class ComplaintWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  complaintCreationTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumComplaintComplaintStatus,
  })
  @IsEnum(EnumComplaintComplaintStatus)
  @IsOptional()
  @Field(() => EnumComplaintComplaintStatus, {
    nullable: true,
  })
  complaintStatus?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumComplaintComplaintStatusOption,
  })
  @IsEnum(EnumComplaintComplaintStatusOption)
  @IsOptional()
  @Field(() => EnumComplaintComplaintStatusOption, {
    nullable: true,
  })
  complaintStatusOption?: "Option1";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  creationTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  creationTimestamp?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @IsOptional()
  @Field(() => LocationWhereUniqueInput, {
    nullable: true,
  })
  location?: LocationWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumComplaintStatus,
  })
  @IsEnum(EnumComplaintStatus)
  @IsOptional()
  @Field(() => EnumComplaintStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumComplaintStatusOfComplaint,
  })
  @IsEnum(EnumComplaintStatusOfComplaint)
  @IsOptional()
  @Field(() => EnumComplaintStatusOfComplaint, {
    nullable: true,
  })
  statusOfComplaint?: "Option1";
}

export { ComplaintWhereInput as ComplaintWhereInput };
