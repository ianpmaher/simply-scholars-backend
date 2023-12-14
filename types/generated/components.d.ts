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

export interface ScholarshipFormBackground extends Schema.Component {
  collectionName: 'components_scholarship_form_backgrounds';
  info: {
    displayName: 'background';
  };
  attributes: {
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ScholarshipFormDeadline extends Schema.Component {
  collectionName: 'components_scholarship_form_deadlines';
  info: {
    displayName: 'deadline';
    icon: 'globe';
  };
  attributes: {
    deadline: Attribute.Date &
      Attribute.Required &
      Attribute.DefaultTo<'2024-12-31'>;
  };
}

export interface ScholarshipFormDescription extends Schema.Component {
  collectionName: 'components_scholarship_form_descriptions';
  info: {
    displayName: 'description';
    icon: 'cup';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.DefaultTo<'scholarship details'>;
  };
}

export interface ScholarshipFormPic extends Schema.Component {
  collectionName: 'components_scholarship_form_pics';
  info: {
    displayName: 'pic';
    icon: 'landscape';
  };
  attributes: {
    pic: Attribute.Media;
    hasPic: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface ScholarshipFormTitle extends Schema.Component {
  collectionName: 'components_scholarship_form_titles';
  info: {
    displayName: 'title';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.title': BlogTitle;
      'scholarship-form.background': ScholarshipFormBackground;
      'scholarship-form.deadline': ScholarshipFormDeadline;
      'scholarship-form.description': ScholarshipFormDescription;
      'scholarship-form.pic': ScholarshipFormPic;
      'scholarship-form.title': ScholarshipFormTitle;
    }
  }
}
