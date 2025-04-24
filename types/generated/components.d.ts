import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleBodyAdvertising extends Struct.ComponentSchema {
  collectionName: 'components_article_body_advertisings';
  info: {
    displayName: 'Advertising';
    icon: 'volumeUp';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    linkText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Learn more'>;
    linkUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ArticleBodyCode extends Struct.ComponentSchema {
  collectionName: 'components_article_body_codes';
  info: {
    displayName: 'Code';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ArticleBodyImage extends Struct.ComponentSchema {
  collectionName: 'components_article_body_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    padding: Schema.Attribute.Boolean;
    stretch: Schema.Attribute.Boolean;
    width: Schema.Attribute.Enumeration<['content', 'screen']> &
      Schema.Attribute.Required;
  };
}

export interface ArticleBodyLead extends Struct.ComponentSchema {
  collectionName: 'components_article_body_leads';
  info: {
    displayName: 'Lead';
    icon: 'information';
  };
  attributes: {
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ArticleBodyQuote extends Struct.ComponentSchema {
  collectionName: 'components_article_body_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    authorDuty: Schema.Attribute.Blocks;
    authorName: Schema.Attribute.Blocks & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['small', 'medium', 'big', 'with photo']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'medium'>;
    width: Schema.Attribute.Enumeration<['content', 'screen']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'screen'>;
  };
}

export interface ArticleBodyText extends Struct.ComponentSchema {
  collectionName: 'components_article_body_texts';
  info: {
    displayName: 'Text';
    icon: 'book';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article-body.advertising': ArticleBodyAdvertising;
      'article-body.code': ArticleBodyCode;
      'article-body.image': ArticleBodyImage;
      'article-body.lead': ArticleBodyLead;
      'article-body.quote': ArticleBodyQuote;
      'article-body.text': ArticleBodyText;
    }
  }
}
