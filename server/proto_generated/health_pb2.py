# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: health.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0chealth.proto\x12\rserver_health\"y\n\x0cServerHealth\x12\x1f\n\x17internal_connection_url\x18\x01 \x01(\t\x12 \n\x18internal_connection_port\x18\x02 \x01(\r\x12\x10\n\x08sessions\x18\x03 \x01(\r\x12\x14\n\x0cmax_sessions\x18\x04 \x01(\rb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'health_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _SERVERHEALTH._serialized_start=31
  _SERVERHEALTH._serialized_end=152
# @@protoc_insertion_point(module_scope)
