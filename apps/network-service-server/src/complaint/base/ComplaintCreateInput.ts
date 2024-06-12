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
import { IsDate, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumComplaintComplaintStatus } from "./EnumComplaintComplaintStatus";
import { EnumComplaintComplaintStatusOption } from "./EnumComplaintComplaintStatusOption";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { EnumComplaintStatus } from "./EnumComplaintStatus";
import { EnumComplaintStatusOfComplaint } from "./EnumComplaintStatusOfComplaint";

@InputType()
class ComplaintCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  complaintCreationTime?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintComplaintStatus,
  })
  @IsEnum(EnumComplaintComplaintStatus)
  @IsOptional()
  @Field(() => EnumComplaintComplaintStatus, {
    nullable: true,
  })
  complaintStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintComplaintStatusOption,
  })
  @IsEnum(EnumComplaintComplaintStatusOption)
  @IsOptional()
  @Field(() => EnumComplaintComplaintStatusOption, {
    nullable: true,
  })
  complaintStatusOption?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  creationTime?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  creationTimestamp?: Date | null;

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
  location?: LocationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintStatus,
  })
  @IsEnum(EnumComplaintStatus)
  @IsOptional()
  @Field(() => EnumComplaintStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintStatusOfComplaint,
  })
  @IsEnum(EnumComplaintStatusOfComplaint)
  @IsOptional()
  @Field(() => EnumComplaintStatusOfComplaint, {
    nullable: true,
  })
  statusOfComplaint?: "Option1" | null;
}

export { ComplaintCreateInput as ComplaintCreateInput };