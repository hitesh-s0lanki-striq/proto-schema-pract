// @generated by protoc-gen-es v1.10.1
// @generated from file demo/demo.proto (package example.model.demo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message example.model.demo.Demo
 */
export const Demo = /*@__PURE__*/ proto3.makeMessageType(
  "example.model.demo.Demo",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

