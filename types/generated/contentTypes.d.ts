import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAllCampusAllCampus extends Struct.SingleTypeSchema {
  collectionName: 'all_campuses';
  info: {
    description: '';
    displayName: 'All Campus';
    pluralName: 'all-campuses';
    singularName: 'all-campus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blendedLearningCtaTitle: Schema.Attribute.String &
      Schema.Attribute.Required;
    blendedLearningHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    blendedLearningPoints: Schema.Attribute.Component<
      'bullet-point.bullet-point',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    blendedLearningTitle: Schema.Attribute.String & Schema.Attribute.Required;
    campusDeciderCtaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    campusDeciderDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    campusDeciderHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    campusDeciderTitle: Schema.Attribute.String & Schema.Attribute.Required;
    campusesCtaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    campusesHeroImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    campusesImgCarousel: Schema.Attribute.Component<
      'img-carousel.img-carousel',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    campusesTitleFirstSegment: Schema.Attribute.String &
      Schema.Attribute.Required;
    campusesTitleSecondSegment: Schema.Attribute.String &
      Schema.Attribute.Required;
    campusesTitleThirdSegment: Schema.Attribute.String &
      Schema.Attribute.Required;
    campusImgCarouselHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    chooseVirohan: Schema.Attribute.Component<
      'choose-virohan.choose-virohan',
      false
    >;
    cities: Schema.Attribute.Relation<'oneToMany', 'api::city.city'>;
    citiesHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    citiesSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    citiesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    citySection: Schema.Attribute.Component<'city.city-section', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eventsCampusLifeCards: Schema.Attribute.Component<
      'events-campus-images.events-campus-images',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    eventsCampusLifeHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    eventsCampusLifeSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    eventsCampusLifeTitle: Schema.Attribute.String & Schema.Attribute.Required;
    expertsBannerCtaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    expertsBannerDescription: Schema.Attribute.Text;
    expertsBannerHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    expertsBannerTitle: Schema.Attribute.String & Schema.Attribute.Required;
    infrastructureHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    infrastructureImages: Schema.Attribute.Component<
      'infrastructure-images.infrastructure-images',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    infrastructureSubtitle: Schema.Attribute.Text;
    infrastructureTitle: Schema.Attribute.String & Schema.Attribute.Required;
    lifeAtVirohanHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    lifeAtVirohanImages: Schema.Attribute.Component<
      'life-at-virohan.life-at-virohan',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::all-campus.all-campus'
    > &
      Schema.Attribute.Private;
    mentoBannerCtaTitle: Schema.Attribute.String;
    mentoBannerDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    mentoBannerHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    mentoBannerTitle: Schema.Attribute.String & Schema.Attribute.Required;
    mentoRedirectUrl: Schema.Attribute.String & Schema.Attribute.Required;
    ourCourses: Schema.Attribute.Component<'courses.our-courses', false>;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    showBlendedLearning: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showCampusDecider: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showCampusImgCarousel: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showCities: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showEventsCampusLife: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showExpertsBanner: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showInfrastructure: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showLifeAtVirohan: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showMentoBanner: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showUpcomingBatches: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    upcomingBatchesHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    upcomingBatchesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogHomepageBlogHomepage extends Struct.SingleTypeSchema {
  collectionName: 'blog_homepages';
  info: {
    description: '';
    displayName: 'Blog Homepage';
    pluralName: 'blog-homepages';
    singularName: 'blog-homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogBanner: Schema.Attribute.Component<'blog-banner.blog-banner', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featuredCategory: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-homepage.blog-homepage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bloggers: Schema.Attribute.Relation<'manyToMany', 'api::blogger.blogger'>;
    categories: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    content: Schema.Attribute.DynamicZone<
      [
        'content.content',
        'media.media',
        'table-of-contents.table-of-contents',
        'lead-form.lead-form',
      ]
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text & Schema.Attribute.Required;
    faq: Schema.Attribute.Component<'faq.faq', true>;
    faqHeading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"FAQ's">;
    featuredImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isFeaturedBlog: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    publishDate: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1969-12-31T18:30:00.000Z'>;
    publishedAt: Schema.Attribute.DateTime;
    seoInformation: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBloggerBlogger extends Struct.CollectionTypeSchema {
  collectionName: 'bloggers';
  info: {
    description: '';
    displayName: 'Blogger';
    pluralName: 'bloggers';
    singularName: 'blogger';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'manyToMany', 'api::blog.blog'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blogger.blogger'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    seoInformation: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampusVisitCampusVisit extends Struct.SingleTypeSchema {
  collectionName: 'campus_visits';
  info: {
    description: '';
    displayName: 'Campus Visit';
    pluralName: 'campus-visits';
    singularName: 'campus-visit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eskimiAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    facebookAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    googleAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campus-visit.campus-visit'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCampusCampus extends Struct.CollectionTypeSchema {
  collectionName: 'campuses';
  info: {
    description: '';
    displayName: 'Campus';
    pluralName: 'campuses';
    singularName: 'campus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    batchStartDate: Schema.Attribute.Date;
    centrId: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    courses: Schema.Attribute.Relation<
      'manyToMany',
      'api::program-family-detail-page.program-family-detail-page'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    latitude: Schema.Attribute.Float;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campus.campus'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    longitude: Schema.Attribute.Float;
    marketing_pages: Schema.Attribute.Relation<
      'manyToMany',
      'api::marketing-page.marketing-page'
    >;
    media: Schema.Attribute.Component<'campus-media.media', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phoneNo: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    state: Schema.Attribute.Enumeration<
      [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chandigarh (UT)',
        'Chhattisgarh',
        'Dadra and Nagar Haveli (UT)',
        'Daman and Diu (UT)',
        'Delhi (NCT)',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Lakshadweep (UT)',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Puducherry (UT)',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttarakhand',
        'Uttar Pradesh',
        'West Bengal',
      ]
    >;
    stats: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoUrl: Schema.Attribute.Media<'videos'>;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'manyToMany', 'api::blog.blog'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    seoInformation: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCenterCenter extends Struct.CollectionTypeSchema {
  collectionName: 'centers';
  info: {
    description: '';
    displayName: 'center';
    pluralName: 'centers';
    singularName: 'center';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    centerList: Schema.Attribute.Component<'lp-centers.lp-centers', true>;
    centerName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    centerUri: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    expandedState: Schema.Attribute.Relation<'oneToOne', 'api::state.state'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::center.center'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoInformation: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    stateCampusMap: Schema.Attribute.Component<
      'state-campus-map.state-campus-mapping',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCityCity extends Struct.CollectionTypeSchema {
  collectionName: 'cities';
  info: {
    description: '';
    displayName: 'city';
    pluralName: 'cities';
    singularName: 'city';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    campuses: Schema.Attribute.Relation<'oneToMany', 'api::campus.campus'>;
    cityLogo: Schema.Attribute.Media<'images'>;
    cityTitle: Schema.Attribute.String;
    coordinates: Schema.Attribute.Component<'coordinate.coordinates', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::city.city'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCourseCourse extends Struct.CollectionTypeSchema {
  collectionName: 'courses';
  info: {
    displayName: 'course';
    pluralName: 'courses';
    singularName: 'course';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course.course'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInstantFormInstantForm extends Struct.CollectionTypeSchema {
  collectionName: 'instant_forms';
  info: {
    description: '';
    displayName: 'InstantForm';
    pluralName: 'instant-forms';
    singularName: 'instant-form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    centerId: Schema.Attribute.String;
    controls: Schema.Attribute.Component<'form-control.form-control', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
        },
        number
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::instant-form.instant-form'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    sourceId: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiLandingPageTypeLandingPageType
  extends Struct.CollectionTypeSchema {
  collectionName: 'landing_page_types';
  info: {
    description: '';
    displayName: 'Landing Page Type';
    pluralName: 'landing-page-types';
    singularName: 'landing-page-type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landing-page-type.landing-page-type'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Struct.CollectionTypeSchema {
  collectionName: 'landing_pages';
  info: {
    description: '';
    displayName: 'Landing Page';
    pluralName: 'landing-pages';
    singularName: 'landing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    campuses: Schema.Attribute.Component<'lp-campuses.lp-campuses', false> &
      Schema.Attribute.Required;
    courses: Schema.Attribute.Component<'lp-courses.lp-courses', false> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eskimiAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    facebookAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    googleAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    hero: Schema.Attribute.Component<'lp-hero.lp-hero', false> &
      Schema.Attribute.Required;
    journey: Schema.Attribute.Component<'lp-jouney.lp-jouney', false> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landing-page.landing-page'
    > &
      Schema.Attribute.Private;
    Name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    speciality: Schema.Attribute.Component<
      'lp-speciality.lp-speciality',
      false
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    watchUsYourself: Schema.Attribute.Component<
      'lp-watch-us.lp-watch-us',
      false
    > &
      Schema.Attribute.Required;
    whatSetsUsApart: Schema.Attribute.Component<
      'lp-sets-apart.lp-sets-apart',
      false
    > &
      Schema.Attribute.Required;
    whyStudentsLoveUs: Schema.Attribute.Component<
      'lp-love-us.lp-love-us',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface ApiMarketingPageMarketingPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'marketing_pages';
  info: {
    description: '';
    displayName: 'Marketing Page';
    pluralName: 'marketing-pages';
    singularName: 'marketing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    activeFormType: Schema.Attribute.Enumeration<['form1', 'form2']> &
      Schema.Attribute.DefaultTo<'form1'>;
    campuses: Schema.Attribute.Relation<'manyToMany', 'api::campus.campus'>;
    campusSectionHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    campusSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    center: Schema.Attribute.Relation<'oneToOne', 'api::center.center'>;
    cities: Schema.Attribute.Relation<'oneToMany', 'api::city.city'>;
    citiesHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    citiesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    courseFees: Schema.Attribute.Component<'course-fee.course-fee', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 3;
        },
        number
      >;
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    facebookAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    facebookUrl: Schema.Attribute.String & Schema.Attribute.Required;
    feeSectionHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    feeSectionSubtitle: Schema.Attribute.Text;
    feeSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    firstFormDescription: Schema.Attribute.Text;
    firstFormTitle: Schema.Attribute.String;
    formLevel: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 0;
        },
        number
      >;
    googleAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    heroBulletPoints: Schema.Attribute.Component<
      'hero-bullet-points.hero-bullet-points',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 0;
        },
        number
      >;
    heroHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    instagramUrl: Schema.Attribute.String & Schema.Attribute.Required;
    leadFormCtaText: Schema.Attribute.String & Schema.Attribute.Required;
    linkedinUrl: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::marketing-page.marketing-page'
    > &
      Schema.Attribute.Private;
    marketingPageType: Schema.Attribute.Enumeration<['Offline', 'Online']> &
      Schema.Attribute.Required;
    menu: Schema.Attribute.JSON & Schema.Attribute.Required;
    microsoftAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placementSection: Schema.Attribute.Component<
      'talent-acquisition.talent-acquisition',
      false
    > &
      Schema.Attribute.Required;
    placementSectionHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    primaryFooter: Schema.Attribute.Component<'footer.footer', true> &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    secondaryFooter: Schema.Attribute.Component<'footer.footer', true> &
      Schema.Attribute.Required;
    secondaryFooterSubtitle: Schema.Attribute.RichText &
      Schema.Attribute.Required;
    secondaryFooterTitle: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryFooterTitleUrl: Schema.Attribute.String &
      Schema.Attribute.Required;
    secondFormDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    secondFormTitle: Schema.Attribute.String & Schema.Attribute.Required;
    showCampusSection: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showEmiOptions: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showFeeSection: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showHero: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showOurCampusCities: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showPrimaryFooter: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showSecondaryFooter: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    testimonialSection: Schema.Attribute.Component<
      'testiminial-data.testimonial-data',
      false
    > &
      Schema.Attribute.Required;
    testimonialSectionHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    youtubeUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiMiscPageMiscPage extends Struct.CollectionTypeSchema {
  collectionName: 'misc_pages';
  info: {
    description: '';
    displayName: 'Misc Page';
    pluralName: 'misc-pages';
    singularName: 'misc-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::misc-page.misc-page'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPartnerPagePartnerPage extends Struct.SingleTypeSchema {
  collectionName: 'partner_pages';
  info: {
    description: '';
    displayName: 'Partner Page';
    pluralName: 'partner-pages';
    singularName: 'partner-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Awards: Schema.Attribute.Component<'awards.awards', false>;
    BusinessModel: Schema.Attribute.Component<
      'business-model.business-model',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formSubtitle: Schema.Attribute.Text;
    formTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner-page.partner-page'
    > &
      Schema.Attribute.Private;
    OurFounders: Schema.Attribute.Component<'founders.our-founders', false>;
    OurSuccess: Schema.Attribute.Component<'our-success.our-success', false>;
    partnerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    partnerVideo: Schema.Attribute.Media<'videos'>;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    WhatWeOffer: Schema.Attribute.Component<
      'virohan-offer.what-we-offer',
      false
    >;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy
  extends Struct.CollectionTypeSchema {
  collectionName: 'privacy_policies';
  info: {
    description: '';
    displayName: 'Privacy Policy';
    pluralName: 'privacy-policies';
    singularName: 'privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::privacy-policy.privacy-policy'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProgramFamilyDetailPageProgramFamilyDetailPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'program_family_detail_pages';
  info: {
    description: '';
    displayName: 'Program Family Detail Page';
    pluralName: 'program-family-detail-pages';
    singularName: 'program-family-detail-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brochureUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://viro.hn/b2c'>;
    campusAvailableHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    campusAvailableTitle: Schema.Attribute.String & Schema.Attribute.Required;
    campuses: Schema.Attribute.Relation<'manyToMany', 'api::campus.campus'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featuresCard: Schema.Attribute.Component<
      'features-card.features-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    feesCard: Schema.Attribute.Component<'fees-card.fees-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 2;
        },
        number
      >;
    feesHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    feesSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    feesTitlte: Schema.Attribute.String & Schema.Attribute.Required;
    howWeTeachCard: Schema.Attribute.Component<
      'how-we-teach-card.how-we-teach-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    howWeTeachHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    howWeTeachImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    howWeTeachTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::program-family-detail-page.program-family-detail-page'
    > &
      Schema.Attribute.Private;
    overviewBadge: Schema.Attribute.Component<
      'program-overview-badge.program-overview-badge',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    overviewDescription: Schema.Attribute.Component<
      'description.description',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 3;
        },
        number
      >;
    overviewHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    overviewSubtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    overviewTitle: Schema.Attribute.String & Schema.Attribute.Required;
    program: Schema.Attribute.Relation<
      'manyToOne',
      'api::program-family-page.program-family-page'
    >;
    programName: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    showCampusAvailable: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showFeatures: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showFees: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showHowWeTeach: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showOverview: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showWhyVirohan: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    tableColTitleOne: Schema.Attribute.String & Schema.Attribute.Required;
    tableColTitleThree: Schema.Attribute.String & Schema.Attribute.Required;
    tableColTitleTwo: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    tableContent: Schema.Attribute.Component<
      'table-content.table-content',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 15;
          min: 5;
        },
        number
      >;
    tableTitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyVirohanContentBlock: Schema.Attribute.Component<
      'why-course-content-block.content-block',
      true
    >;
    whyVirohanHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    whyVirohanTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiProgramFamilyPageProgramFamilyPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'program_family_pages';
  info: {
    description: '';
    displayName: 'Program family Page';
    pluralName: 'program-family-pages';
    singularName: 'program-family-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    careerGrowthCard: Schema.Attribute.Component<
      'career-growth-card.career-growth-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    careerGrowthDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    careerGrowthHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    careerGrowthSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    careerGrowthTitle: Schema.Attribute.String & Schema.Attribute.Required;
    careerImpactCard: Schema.Attribute.Component<
      'career-impact-card.career-impact-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    careerImpactDescriptions: Schema.Attribute.Text & Schema.Attribute.Required;
    careerImpactHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    careerImpactTitle: Schema.Attribute.String & Schema.Attribute.Required;
    careerOptionCard: Schema.Attribute.Component<
      'career-option-card.career-option-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 10;
        },
        number
      >;
    careerOptionHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    careerOptionSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    careerOptionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    certificateAndFeesHeaderName: Schema.Attribute.String &
      Schema.Attribute.Required;
    certificateLogos: Schema.Attribute.Component<
      'certificate-logos.certificate-logos',
      true
    > &
      Schema.Attribute.Required;
    certificatesubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    certificateTitle: Schema.Attribute.String & Schema.Attribute.Required;
    courseName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    courses: Schema.Attribute.Relation<
      'oneToMany',
      'api::program-family-detail-page.program-family-detail-page'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    feeCards: Schema.Attribute.Component<'fee-cards.fee-cards', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 2;
        },
        number
      >;
    feesSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    feesTitle: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::program-family-page.program-family-page'
    > &
      Schema.Attribute.Private;
    overviewBadge: Schema.Attribute.Component<'badge.badge', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    overviewDescription: Schema.Attribute.Component<
      'description.description',
      true
    > &
      Schema.Attribute.Required;
    overviewHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    overviewImage: Schema.Attribute.Component<'images.images', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    overviewSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    overviewTitle: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    showCareerGrowth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showCareerImpact: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showCareerOption: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showCertificatesAndFees: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showOverview: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showWhyCourse: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.UID<'courseName'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyCourseContentBlock: Schema.Attribute.Component<
      'why-course-content-block.content-block',
      true
    > &
      Schema.Attribute.Required;
    whyCourseHeaderName: Schema.Attribute.String & Schema.Attribute.Required;
    whyCoursesubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    whyCourseTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiRefundPolicyRefundPolicy
  extends Struct.CollectionTypeSchema {
  collectionName: 'refund_policies';
  info: {
    description: '';
    displayName: 'Refund Policy';
    pluralName: 'refund-policies';
    singularName: 'refund-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::refund-policy.refund-policy'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStateState extends Struct.CollectionTypeSchema {
  collectionName: 'states';
  info: {
    displayName: 'State';
    pluralName: 'states';
    singularName: 'state';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::state.state'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiStudentPolicyStudentPolicy
  extends Struct.CollectionTypeSchema {
  collectionName: 'student_policies';
  info: {
    description: '';
    displayName: 'Student Policy';
    pluralName: 'student-policies';
    singularName: 'student-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::student-policy.student-policy'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    description: '';
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'manyToMany', 'api::blog.blog'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    seoInformation: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTermsAndConditionTermsAndCondition
  extends Struct.CollectionTypeSchema {
  collectionName: 'terms_and_conditions';
  info: {
    description: '';
    displayName: 'terms and condition';
    pluralName: 'terms-and-conditions';
    singularName: 'terms-and-condition';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::terms-and-condition.terms-and-condition'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiVirohanFormVirohanForm extends Struct.CollectionTypeSchema {
  collectionName: 'virohan_forms';
  info: {
    description: '';
    displayName: 'virohanForm';
    pluralName: 'virohan-forms';
    singularName: 'virohan-form';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    centreId: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::virohan-form.virohan-form'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    questions: Schema.Attribute.DynamicZone<
      [
        'short-text.short-text',
        'long-text.long-text',
        'numeric-text.numeric-text',
        'email.email',
        'date-text.date-type',
        'phone-number.phone-number',
        'multiple-choice.multiple-choice',
        'thankyou-screen.thankyou-screen',
      ]
    >;
    sourceId: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiWebsiteHomepageWebsiteHomepage
  extends Struct.CollectionTypeSchema {
  collectionName: 'website_homepages';
  info: {
    description: '';
    displayName: 'website Homepage';
    pluralName: 'website-homepages';
    singularName: 'website-homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    affiliationData: Schema.Attribute.Component<
      'affiliation-data.affiliation-data',
      false
    > &
      Schema.Attribute.Required;
    banner: Schema.Attribute.Component<'banner.banner', false> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    downloadApp: Schema.Attribute.Component<
      'download-app.download-app',
      false
    > &
      Schema.Attribute.Required;
    facebookAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    facebookUrl: Schema.Attribute.String & Schema.Attribute.Required;
    featuresData: Schema.Attribute.Component<
      'features-data.features-data',
      false
    > &
      Schema.Attribute.Required;
    googleAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    hero: Schema.Attribute.Component<'hero.hero', false> &
      Schema.Attribute.Required;
    instagramUrl: Schema.Attribute.String & Schema.Attribute.Required;
    journeyData: Schema.Attribute.Component<
      'journey-data.journey-data',
      false
    > &
      Schema.Attribute.Required;
    linkedinUrl: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::website-homepage.website-homepage'
    > &
      Schema.Attribute.Private;
    menu: Schema.Attribute.JSON & Schema.Attribute.Required;
    microsoftAnalytics: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    primaryFooter: Schema.Attribute.Component<'footer.footer', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 3;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    secondaryFooter: Schema.Attribute.Component<'footer.footer', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    secondaryFooterSubtitle: Schema.Attribute.RichText &
      Schema.Attribute.Required;
    secondaryFooterTitle: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryFooterTitleUrl: Schema.Attribute.String &
      Schema.Attribute.Required;
    seoData: Schema.Attribute.Component<
      'seo-information.seo-information',
      false
    > &
      Schema.Attribute.Required;
    showPrimaryFooter: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showSecondaryFooter: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    statsData: Schema.Attribute.Component<'stats-data.stats-data', false> &
      Schema.Attribute.Required;
    talentAcquisitionData: Schema.Attribute.Component<
      'talent-acquisition.talent-acquisition',
      false
    > &
      Schema.Attribute.Required;
    testimonialData: Schema.Attribute.Component<
      'testiminial-data.testimonial-data',
      false
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    virohanInNews: Schema.Attribute.Component<
      'virohan-in-news.virohan-in-news',
      false
    > &
      Schema.Attribute.Required;
    youtubeUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::all-campus.all-campus': ApiAllCampusAllCampus;
      'api::blog-homepage.blog-homepage': ApiBlogHomepageBlogHomepage;
      'api::blog.blog': ApiBlogBlog;
      'api::blogger.blogger': ApiBloggerBlogger;
      'api::campus-visit.campus-visit': ApiCampusVisitCampusVisit;
      'api::campus.campus': ApiCampusCampus;
      'api::category.category': ApiCategoryCategory;
      'api::center.center': ApiCenterCenter;
      'api::city.city': ApiCityCity;
      'api::course.course': ApiCourseCourse;
      'api::instant-form.instant-form': ApiInstantFormInstantForm;
      'api::landing-page-type.landing-page-type': ApiLandingPageTypeLandingPageType;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::marketing-page.marketing-page': ApiMarketingPageMarketingPage;
      'api::misc-page.misc-page': ApiMiscPageMiscPage;
      'api::partner-page.partner-page': ApiPartnerPagePartnerPage;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::program-family-detail-page.program-family-detail-page': ApiProgramFamilyDetailPageProgramFamilyDetailPage;
      'api::program-family-page.program-family-page': ApiProgramFamilyPageProgramFamilyPage;
      'api::refund-policy.refund-policy': ApiRefundPolicyRefundPolicy;
      'api::state.state': ApiStateState;
      'api::student-policy.student-policy': ApiStudentPolicyStudentPolicy;
      'api::tag.tag': ApiTagTag;
      'api::terms-and-condition.terms-and-condition': ApiTermsAndConditionTermsAndCondition;
      'api::virohan-form.virohan-form': ApiVirohanFormVirohanForm;
      'api::website-homepage.website-homepage': ApiWebsiteHomepageWebsiteHomepage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
