"use client";

import * as Icons from '../../icons';

export default function GetIcon({ name, ...props }) {
  const Icon = Icons[name];
  return Icon ? <Icon {...props} /> : null;
}