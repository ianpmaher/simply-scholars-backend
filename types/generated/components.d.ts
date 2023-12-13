import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogTitle extends Schema.Component {
  collectionName: 'components_blog_titles';
  info: {
    displayName: 'title';
    icon: 'crop';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'blog title'>;
    blogcontent: Attribute.RichText & Attribute.DefaultTo<'blogcontent'>;
  };
}

export interface ScholarshipScholarshipType extends Schema.Component {
  collectionName: 'components_scholarship_scholarship_types';
  info: {
    displayName: 'scholarship-type';
    icon: 'hashtag';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'scholarshipName'>;
    description: Attribute.RichText &
      Attribute.DefaultTo<'scholarship description'>;
    deadline: Attribute.Date & Attribute.DefaultTo<'2024-12-01'>;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    value: Attribute.Integer;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.title': BlogTitle;
      'scholarship.scholarship-type': ScholarshipScholarshipType;
    }
  }
}
