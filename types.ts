
import React from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  benefit: string;
  icon: React.ElementType;
}

export interface Differential {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  name: string;
  text: string;
}
