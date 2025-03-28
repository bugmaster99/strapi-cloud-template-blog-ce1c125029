import type { Schema, Struct } from '@strapi/strapi';

export interface AffiliationDataAffiliationData extends Struct.ComponentSchema {
  collectionName: 'components_affiliation_data_affiliation';
  info: {
    description: '';
    displayName: 'affiliationData';
  };
  attributes: {
    logos: Schema.Attribute.Component<'logos.logos', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 5;
        },
        number
      >;
    showAffiliationData: Schema.Attribute.Boolean & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AwardAward extends Struct.ComponentSchema {
  collectionName: 'components_award_awards';
  info: {
    displayName: 'award';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AwardsAwards extends Struct.ComponentSchema {
  collectionName: 'components_awards_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    Award: Schema.Attribute.Component<'award.award', true>;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Awards & Spotlights'>;
  };
}

export interface BadgeBadge extends Struct.ComponentSchema {
  collectionName: 'components_badge_badges';
  info: {
    description: '';
    displayName: 'badge';
  };
  attributes: {
    showBadge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    description: '';
    displayName: 'banner';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    showBanner: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogBannerBlogBanner extends Struct.ComponentSchema {
  collectionName: 'components_blog_banner_blog_banners';
  info: {
    description: '';
    displayName: 'blogBanner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bannerVideo: Schema.Attribute.Media<'videos'>;
  };
}

export interface BodyDescriptionBodyDescription extends Struct.ComponentSchema {
  collectionName: 'components_body_description_body_description_s';
  info: {
    displayName: 'body-description ';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BulletPointBulletPoint extends Struct.ComponentSchema {
  collectionName: 'components_bullet_point_bullet_points';
  info: {
    displayName: 'bullet-point';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BusinessModelBusinessModel extends Struct.ComponentSchema {
  collectionName: 'components_business_model_business_models';
  info: {
    description: '';
    displayName: 'BusinessModel';
  };
  attributes: {
    businessValue: Schema.Attribute.Component<
      'business-value.business-value',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 4;
        },
        number
      >;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Business Model'>;
  };
}

export interface BusinessValueBusinessValue extends Struct.ComponentSchema {
  collectionName: 'components_business_value_business_values';
  info: {
    displayName: 'businessValue';
  };
  attributes: {
    partnerOffers: Schema.Attribute.String;
    studentJourney: Schema.Attribute.String & Schema.Attribute.Required;
    virohanOffers: Schema.Attribute.String;
  };
}

export interface CampusMediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_campus_media_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'>;
    videoThumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface CampusNameCampusName extends Struct.ComponentSchema {
  collectionName: 'components_campus_name_campus_names';
  info: {
    displayName: 'campusName';
  };
  attributes: {};
}

export interface CampusCampus extends Struct.ComponentSchema {
  collectionName: 'components_campus_campuses';
  info: {
    description: '';
    displayName: 'campus';
  };
  attributes: {
    centerId: Schema.Attribute.String & Schema.Attribute.Required;
    centerName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CampusStateCampuses extends Struct.ComponentSchema {
  collectionName: 'components_campus_state_campuses';
  info: {
    description: '';
    displayName: 'stateCampuses';
  };
  attributes: {
    centerId: Schema.Attribute.Integer;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String;
  };
}

export interface CardsCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_cards';
  info: {
    description: '';
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerGrowthCardCareerGrowthCard
  extends Struct.ComponentSchema {
  collectionName: 'components_career_growth_card_career_growth_cards';
  info: {
    description: '';
    displayName: 'careerGrowthCard';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerImpactCardCareerImpactCard
  extends Struct.ComponentSchema {
  collectionName: 'components_career_impact_card_career_impact_cards';
  info: {
    displayName: 'careerImpactCard';
  };
  attributes: {
    companyLogo: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    feedback: Schema.Attribute.Text & Schema.Attribute.Required;
    fromPosition: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profileImage: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    toPosition: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerOptionCardCareerOptionCard
  extends Struct.ComponentSchema {
  collectionName: 'components_career_option_card_career_option_cards';
  info: {
    displayName: 'career-option-card';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CentersCenters extends Struct.ComponentSchema {
  collectionName: 'components_centers_centers';
  info: {
    displayName: 'centers';
  };
  attributes: {
    batchStartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    latitude: Schema.Attribute.Float & Schema.Attribute.Required;
    longitude: Schema.Attribute.Float & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    stats: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CertificateLogosCertificateLogos
  extends Struct.ComponentSchema {
  collectionName: 'components_certificate_logos_certificate_logos';
  info: {
    displayName: 'certificate-logos';
  };
  attributes: {
    certificate: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ChooseVirohanChooseVirohan extends Struct.ComponentSchema {
  collectionName: 'components_choose_virohan_choose_virohans';
  info: {
    description: '';
    displayName: 'chooseVirohan';
  };
  attributes: {
    headerName: Schema.Attribute.String & Schema.Attribute.Required;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    virohanValues: Schema.Attribute.Component<
      'virohan-values.virohan-values',
      true
    >;
  };
}

export interface CityHeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_city_header_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    firstSubtitle: Schema.Attribute.String;
    firstSubtitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    firstTitle: Schema.Attribute.String;
    firstTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    secondSubtitle: Schema.Attribute.String;
    secondSubtitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    secondTitle: Schema.Attribute.String;
    secondTitleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CityCitySection extends Struct.ComponentSchema {
  collectionName: 'components_city_city_sections';
  info: {
    displayName: 'citySection';
    icon: 'earth';
  };
  attributes: {
    cities: Schema.Attribute.Relation<'oneToMany', 'api::city.city'>;
    cityHeader: Schema.Attribute.Component<'city-header.header', false>;
    headerName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'cities'>;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
    icon: 'envelope-open-text';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface CoordinateCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_coordinate_coordinates';
  info: {
    description: '';
    displayName: 'coordinates';
  };
  attributes: {
    latitude: Schema.Attribute.Float;
    longitude: Schema.Attribute.Float;
  };
}

export interface CourseFeeCourseFee extends Struct.ComponentSchema {
  collectionName: 'components_course_fee_course_fees';
  info: {
    description: '';
    displayName: 'courseFee';
  };
  attributes: {
    brochureUrl: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    descriptionFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    detailPageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    feeBadge: Schema.Attribute.Component<'badge.badge', false>;
    feeCardBodyDescription: Schema.Attribute.Component<
      'body-description.body-description',
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
    finalPriceTitle: Schema.Attribute.String & Schema.Attribute.Required;
    headerBackgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    priceSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    strikePriceTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CourseCourses extends Struct.ComponentSchema {
  collectionName: 'components_course_courses';
  info: {
    description: '';
    displayName: 'courses';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    redirectUrl: Schema.Attribute.String & Schema.Attribute.Required;
    status: Schema.Attribute.String;
  };
}

export interface CoursesOurCourses extends Struct.ComponentSchema {
  collectionName: 'components_courses_our_courses';
  info: {
    description: '';
    displayName: 'ourCourses';
  };
  attributes: {
    courses: Schema.Attribute.Component<'course.courses', true>;
    headerName: Schema.Attribute.String & Schema.Attribute.Required;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DateTextDateType extends Struct.ComponentSchema {
  collectionName: 'components_date_type_date_types';
  info: {
    description: '';
    displayName: 'dateText';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface DescriptionDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_description_s';
  info: {
    description: '';
    displayName: 'description ';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DistrictDistricts extends Struct.ComponentSchema {
  collectionName: 'components_district_districts';
  info: {
    description: '';
    displayName: 'districts';
  };
  attributes: {
    districtName: Schema.Attribute.String;
    sendFbPixelEvent: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface DownloadAppDownloadApp extends Struct.ComponentSchema {
  collectionName: 'components_download_app_download_apps';
  info: {
    displayName: 'downloadApp';
  };
  attributes: {
    showDownloadApp: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface EmailEmail extends Struct.ComponentSchema {
  collectionName: 'components_email_emails';
  info: {
    description: '';
    displayName: 'email';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface EmisEmis extends Struct.ComponentSchema {
  collectionName: 'components_emis_emis';
  info: {
    displayName: 'emis';
  };
  attributes: {
    discount: Schema.Attribute.String & Schema.Attribute.Required;
    instalment: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface EventsCampusImagesEventsCampusImages
  extends Struct.ComponentSchema {
  collectionName: 'components_events_campus_images_events_campus_images';
  info: {
    description: '';
    displayName: 'eventsCampusImages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eventsCampusLifeImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface FeaturesCardFeaturesCard extends Struct.ComponentSchema {
  collectionName: 'components_features_card_features_cards';
  info: {
    description: '';
    displayName: 'featuresCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeaturesContentFeaturesContent extends Struct.ComponentSchema {
  collectionName: 'components_features_content_features_contents';
  info: {
    displayName: 'featuresContent';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeaturesDataFeaturesData extends Struct.ComponentSchema {
  collectionName: 'components_features_data_features_data';
  info: {
    description: '';
    displayName: 'featuresData';
  };
  attributes: {
    features: Schema.Attribute.Component<'features.features', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    showFeaturesData: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface FeaturesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_features_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeeCardsFeeCards extends Struct.ComponentSchema {
  collectionName: 'components_fee_cards_fee_cards';
  info: {
    description: '';
    displayName: 'fee-cards';
  };
  attributes: {
    brochureUrl: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    descriptionFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    detailPageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    feeBadge: Schema.Attribute.Component<'badge.badge', false>;
    feeCardBodyDescription: Schema.Attribute.Component<
      'body-description.body-description',
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
    finalPriceTitle: Schema.Attribute.String & Schema.Attribute.Required;
    headerBackgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    priceSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
    strikePriceTitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    subtitleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface FeePlanFeePlan extends Struct.ComponentSchema {
  collectionName: 'components_fee_plan_fee_plans';
  info: {
    description: '';
    displayName: 'feePlan';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    emis: Schema.Attribute.Component<'emis.emis', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    feeBadge: Schema.Attribute.Component<
      'program-overview-badge.program-overview-badge',
      true
    >;
    feesCardBody: Schema.Attribute.Component<
      'body-description.body-description',
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
    price: Schema.Attribute.String & Schema.Attribute.Required;
    strikedPrice: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface FeesCardFeesCard extends Struct.ComponentSchema {
  collectionName: 'components_fees_card_fees_cards';
  info: {
    description: '';
    displayName: 'feesCard';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    emis: Schema.Attribute.Component<'emis.emis', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      >;
    feeBadge: Schema.Attribute.Component<
      'program-overview-badge.program-overview-badge',
      false
    >;
    feesCardBody: Schema.Attribute.Component<
      'body-description.body-description',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      >;
    price: Schema.Attribute.Integer & Schema.Attribute.Required;
    strikedPrice: Schema.Attribute.Integer;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    subtitleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleFontColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    items: Schema.Attribute.Component<'items.items', true> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormControlFormControl extends Struct.ComponentSchema {
  collectionName: 'components_form_control_form_controls';
  info: {
    description: '';
    displayName: 'formControl';
  };
  attributes: {
    databaseKey: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    options: Schema.Attribute.Component<'select-options.select-options', true>;
    placeholder: Schema.Attribute.String;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    type: Schema.Attribute.Enumeration<
      [
        'short-text',
        'long-text',
        'email',
        'date',
        'phone-number',
        'numeric-text',
        'multiple-choice',
      ]
    >;
  };
}

export interface FounderFounder extends Struct.ComponentSchema {
  collectionName: 'components_founder_founders';
  info: {
    displayName: 'Founder';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FoundersOurFounders extends Struct.ComponentSchema {
  collectionName: 'components_founders_our_founders';
  info: {
    displayName: 'OurFounders';
  };
  attributes: {
    Founder: Schema.Attribute.Component<'founder.founder', true>;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Founders'>;
  };
}

export interface HeroBulletPointsHeroBulletPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_hero_bullet_points_hero_bullet_points';
  info: {
    description: '';
    displayName: 'heroBulletPoints';
  };
  attributes: {
    firstText: Schema.Attribute.String & Schema.Attribute.Required;
    firstTextBold: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    secondText: Schema.Attribute.String & Schema.Attribute.Required;
    secondTextBold: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showBulletItem: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    images: Schema.Attribute.Component<'images.images', true> &
      Schema.Attribute.Required;
    keywords: Schema.Attribute.Component<
      'title-keywords.title-keywords',
      true
    > &
      Schema.Attribute.Required;
    showHero: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface HowWeTeachCardHowWeTeachCard extends Struct.ComponentSchema {
  collectionName: 'components_how_we_teach_card_how_we_teach_cards';
  info: {
    displayName: 'howWeTeachCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImagesImages extends Struct.ComponentSchema {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ImgCarouselImgCarousel extends Struct.ComponentSchema {
  collectionName: 'components_img_carousel_img_carousels';
  info: {
    description: '';
    displayName: 'imgCarousel';
  };
  attributes: {
    campusImg: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface InfrastructureImagesInfrastructureImages
  extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_images_infrastructure_images';
  info: {
    description: '';
    displayName: 'infrastructureImages';
  };
  attributes: {
    infrastructureImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
  };
}

export interface ItemItem extends Struct.ComponentSchema {
  collectionName: 'components_item_items';
  info: {
    description: '';
    displayName: 'item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_items_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JourneyDataJourneyData extends Struct.ComponentSchema {
  collectionName: 'components_journey_data_journey_data';
  info: {
    description: '';
    displayName: 'journeyData';
  };
  attributes: {
    cards: Schema.Attribute.Component<'cards.cards', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 5;
        },
        number
      >;
    showJourneyData: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LeadFormLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_lead_form_lead_forms';
  info: {
    displayName: 'leadForm';
  };
  attributes: {
    showLeadForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface LifeAtVirohanLifeAtVirohan extends Struct.ComponentSchema {
  collectionName: 'components_life_at_virohan_life_at_virohans';
  info: {
    description: '';
    displayName: 'LifeAtVirohan';
  };
  attributes: {
    lifeAtVirohanImage: Schema.Attribute.Media<'images' | 'videos'>;
    videoThumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface LogosLogos extends Struct.ComponentSchema {
  collectionName: 'components_logos_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LongTextLongText extends Struct.ComponentSchema {
  collectionName: 'components_long_text_long_texts';
  info: {
    description: '';
    displayName: 'longText';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface LpCampusesLpCampuses extends Struct.ComponentSchema {
  collectionName: 'components_lp_campuses_lp_campuses';
  info: {
    displayName: 'lpCampuses';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    showCampuses: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpCentersLpCenters extends Struct.ComponentSchema {
  collectionName: 'components_lp_centers_lp_centers';
  info: {
    displayName: 'lpCenters';
  };
  attributes: {
    centerId: Schema.Attribute.Integer & Schema.Attribute.Required;
    centerName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpCourseListLpCourseList extends Struct.ComponentSchema {
  collectionName: 'components_lp_course_list_lp_course_lists';
  info: {
    displayName: 'lpCourseList';
  };
  attributes: {
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpCoursesLpCourses extends Struct.ComponentSchema {
  collectionName: 'components_lp_courses_lp_courses';
  info: {
    displayName: 'lpCourses';
  };
  attributes: {
    courseList: Schema.Attribute.Component<
      'lp-course-list.lp-course-list',
      true
    >;
    showCourses: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpHeroLpHero extends Struct.ComponentSchema {
  collectionName: 'components_lp_hero_lp_heroes';
  info: {
    description: '';
    displayName: 'lpHero';
  };
  attributes: {
    center: Schema.Attribute.Relation<'oneToOne', 'api::center.center'>;
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    firstFormDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    firstFormTitle: Schema.Attribute.String & Schema.Attribute.Required;
    formLevel: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<2>;
    imgDesktop: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imgMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    landingPageType: Schema.Attribute.Relation<
      'oneToOne',
      'api::landing-page-type.landing-page-type'
    >;
    secondFormDescription: Schema.Attribute.String;
    secondFormTitle: Schema.Attribute.String;
    showHero: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface LpJouneyLpJouney extends Struct.ComponentSchema {
  collectionName: 'components_lp_jouney_lp_jouneys';
  info: {
    description: '';
    displayName: 'lpJouney';
  };
  attributes: {
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    journeyList: Schema.Attribute.Component<
      'lp-journey-list.lp-journey-list',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    showJourney: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpJourneyListLpJourneyList extends Struct.ComponentSchema {
  collectionName: 'components_lp_journey_list_lp_journey_lists';
  info: {
    description: '';
    displayName: 'lpJourneyList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpLoveUsListLpLoveUsList extends Struct.ComponentSchema {
  collectionName: 'components_lp_love_us_list_lp_love_us_lists';
  info: {
    description: '';
    displayName: 'lpLoveUsList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    youtubeUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpLoveUsLpLoveUs extends Struct.ComponentSchema {
  collectionName: 'components_lp_love_us_lp_loveuses';
  info: {
    description: '';
    displayName: 'lpLoveUs';
  };
  attributes: {
    showWhyStudentsLoveUs: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whyStudentsLoveUsList: Schema.Attribute.Component<
      'lp-love-us-list.lp-love-us-list',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
      >;
  };
}

export interface LpSetsApartListLpSetsApartList extends Struct.ComponentSchema {
  collectionName: 'components_lp_sets_apart_list_lp_sets_apart_lists';
  info: {
    displayName: 'lpSetsApartList';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpSetsApartLpSetsApart extends Struct.ComponentSchema {
  collectionName: 'components_lp_sets_apart_lp_sets_aparts';
  info: {
    description: '';
    displayName: 'lpSetsApart';
  };
  attributes: {
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    showWhatSetsUsApart: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    whatSetsUsApartList: Schema.Attribute.Component<
      'lp-sets-apart-list.lp-sets-apart-list',
      true
    >;
  };
}

export interface LpSpecialityListLpSpecialityList
  extends Struct.ComponentSchema {
  collectionName: 'components_lp_speciality_list_lp_speciality_lists';
  info: {
    displayName: 'lpSpecialityList';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpSpecialityLpSpeciality extends Struct.ComponentSchema {
  collectionName: 'components_lp_speciality_lp_specialities';
  info: {
    description: '';
    displayName: 'lpSpeciality';
  };
  attributes: {
    showSpeciality: Schema.Attribute.Boolean & Schema.Attribute.Required;
    specialityList: Schema.Attribute.Component<
      'lp-speciality-list.lp-speciality-list',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 2;
        },
        number
      >;
  };
}

export interface LpWatchUsYouselfListLpWatchUsYouselfList
  extends Struct.ComponentSchema {
  collectionName: 'components_lp_watch_us_youself_list_lp_watch_us_youself_lists';
  info: {
    displayName: 'lpWatchUsYouselfList';
  };
  attributes: {
    youtubeUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LpWatchUsLpWatchUs extends Struct.ComponentSchema {
  collectionName: 'components_lp_watch_us_lp_watchuses';
  info: {
    description: '';
    displayName: 'lpWatchUs';
  };
  attributes: {
    showWatchUsYourself: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    watchUsYourselfList: Schema.Attribute.Component<
      'lp-watch-us-youself-list.lp-watch-us-youself-list',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
  };
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
    icon: 'images';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface MultipleChoiceMultipleChoice extends Struct.ComponentSchema {
  collectionName: 'components_multiple_choice_multiple_choices';
  info: {
    description: '';
    displayName: 'multipleChoice';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'options.options', true> &
      Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface NewsCardNewsCard extends Struct.ComponentSchema {
  collectionName: 'components_news_card_news_cards';
  info: {
    description: '';
    displayName: 'newsCard';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NumericOptionsNumericOptions extends Struct.ComponentSchema {
  collectionName: 'components_numeric_options_numeric_options';
  info: {
    displayName: 'numericOptions';
  };
  attributes: {
    key: Schema.Attribute.Enumeration<
      [
        'Greater than',
        'Greater than equal to',
        'Less than',
        'Less than equal to',
        'Equal to',
        'Not equal to',
      ]
    > &
      Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    value: Schema.Attribute.Float & Schema.Attribute.Required;
  };
}

export interface NumericTextNumericText extends Struct.ComponentSchema {
  collectionName: 'components_numeric_text_numeric_texts';
  info: {
    description: '';
    displayName: 'numericText';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer;
    numericOptions: Schema.Attribute.Component<
      'numeric-options.numeric-options',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      >;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface OptionsOptions extends Struct.ComponentSchema {
  collectionName: 'components_options_options';
  info: {
    description: '';
    displayName: 'options';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurSuccessOurSuccess extends Struct.ComponentSchema {
  collectionName: 'components_our_success_our_successes';
  info: {
    description: '';
    displayName: 'ourSuccess';
  };
  attributes: {
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    SuccessComp: Schema.Attribute.Component<
      'partner-success.success-comp',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Success'>;
  };
}

export interface OverviewBadgeOverviewBadge extends Struct.ComponentSchema {
  collectionName: 'components_overview_badge_overview_badges';
  info: {
    displayName: 'overview-badge';
  };
  attributes: {
    showOverviewBadge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnerSuccessSuccessComp extends Struct.ComponentSchema {
  collectionName: 'components_partner_success_success_comps';
  info: {
    displayName: 'SuccessComp';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PhoneNumberPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_phone_number_phone_numbers';
  info: {
    description: '';
    displayName: 'phoneNumber';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ProgramOverviewBadgeProgramOverviewBadge
  extends Struct.ComponentSchema {
  collectionName: 'components_program_overview_badge_program_overview_badges';
  info: {
    description: '';
    displayName: 'programOverviewBadge';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    showBadge: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleFontColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface QuestionsQuestions extends Struct.ComponentSchema {
  collectionName: 'components_questions_questions';
  info: {
    description: '';
    displayName: 'questions';
  };
  attributes: {
    option: Schema.Attribute.Component<'options.options', true>;
    question: Schema.Attribute.Text;
    questionId: Schema.Attribute.Integer;
  };
}

export interface SelectOptionsSelectOptions extends Struct.ComponentSchema {
  collectionName: 'components_select_options_select_options';
  info: {
    description: '';
    displayName: 'selectOptions';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String;
  };
}

export interface SeoInformationSeoInformation extends Struct.ComponentSchema {
  collectionName: 'components_seo_information_seo_informations';
  info: {
    displayName: 'SeoInformation';
    icon: 'atlas';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShortTextShortText extends Struct.ComponentSchema {
  collectionName: 'components_short_text_short_texts';
  info: {
    description: '';
    displayName: 'shortText';
  };
  attributes: {
    errorMessage: Schema.Attribute.String & Schema.Attribute.Required;
    nextQuestionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer & Schema.Attribute.Required;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface StateCampusMapStateCampusMapping
  extends Struct.ComponentSchema {
  collectionName: 'components_state_campus_map_state_campus_mappings';
  info: {
    description: '';
    displayName: 'stateCampusMapping';
  };
  attributes: {
    campuses: Schema.Attribute.Component<'campus.state-campuses', true>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    state: Schema.Attribute.Relation<'oneToOne', 'api::state.state'>;
  };
}

export interface StateNameStateName extends Struct.ComponentSchema {
  collectionName: 'components_state_name_state_names';
  info: {
    displayName: 'stateName';
  };
  attributes: {};
}

export interface StateState extends Struct.ComponentSchema {
  collectionName: 'components_state_states';
  info: {
    description: '';
    displayName: 'state';
  };
  attributes: {
    campus: Schema.Attribute.Component<'campus.campus', true>;
    stateName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StatsDataStatsData extends Struct.ComponentSchema {
  collectionName: 'components_stats_data_stats_data';
  info: {
    description: '';
    displayName: 'statsData';
  };
  attributes: {
    showStatsData: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    stats: Schema.Attribute.Component<'stats.stats', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StatsStats extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats';
  info: {
    description: '';
    displayName: 'stats';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SuccessStatsSuccessStats extends Struct.ComponentSchema {
  collectionName: 'components_success_stats_success_stats';
  info: {
    description: '';
    displayName: 'successStats';
  };
  attributes: {
    showStatsData: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    stats: Schema.Attribute.Component<'stats.stats', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TableContentTableContent extends Struct.ComponentSchema {
  collectionName: 'components_table_content_table_contents';
  info: {
    description: '';
    displayName: 'tableContent';
  };
  attributes: {
    cellLogoOne: Schema.Attribute.Media<'images'>;
    cellLogoThree: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    cellLogoTwo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    cellTitleOne: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TableOfContentsTableOfContents extends Struct.ComponentSchema {
  collectionName: 'components_table_of_contents_table_of_contents';
  info: {
    displayName: 'TableOfContents';
    icon: 'table';
  };
  attributes: {
    tableOfContents: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface TalentAcquisitionTalentAcquisition
  extends Struct.ComponentSchema {
  collectionName: 'components_talent_acquisition_talent';
  info: {
    description: '';
    displayName: 'talentAcquisition';
  };
  attributes: {
    backgroundText: Schema.Attribute.String & Schema.Attribute.Required;
    logos: Schema.Attribute.Component<'logos.logos', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 20;
        },
        number
      >;
    showTalentAcquisitionData: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TestiminialDataTestimonialData extends Struct.ComponentSchema {
  collectionName: 'components_testiminial_data_testimonial';
  info: {
    description: '';
    displayName: 'testimonialData';
  };
  attributes: {
    showTestimonialData: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<
      'testimonials.testimonials',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videos: Schema.Attribute.Component<'videos.videos', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
  };
}

export interface TestimonialsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimonials';
  info: {
    description: '';
    displayName: 'testimonials';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    feedback: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ThankyouScreenThankyouScreen extends Struct.ComponentSchema {
  collectionName: 'components_thankyou_screen_thankyou_screens';
  info: {
    description: '';
    displayName: 'thankyouScreen';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    questionId: Schema.Attribute.Integer;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleKeywordsTitleKeywords extends Struct.ComponentSchema {
  collectionName: 'components_title_keywords_title_keywords';
  info: {
    description: '';
    displayName: 'titleKeywords';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    keyword: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VideosVideos extends Struct.ComponentSchema {
  collectionName: 'components_videos_videos';
  info: {
    description: '';
    displayName: 'videos';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface VirohanInNewsVirohanInNews extends Struct.ComponentSchema {
  collectionName: 'components_virohan_in_news_virohan_in_news';
  info: {
    description: '';
    displayName: 'virohan InNews';
  };
  attributes: {
    newsCard: Schema.Attribute.Component<'news-card.news-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
    showVirohanInNews: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    viewMoreUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VirohanOfferWhatWeOffer extends Struct.ComponentSchema {
  collectionName: 'components_virohan_offer_what_we_offers';
  info: {
    description: '';
    displayName: 'whatWeOffer';
  };
  attributes: {
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'What we offer'>;
    VirohanOffers: Schema.Attribute.Component<
      'virohan-offers.virohan-offers',
      true
    >;
  };
}

export interface VirohanOffersVirohanOffers extends Struct.ComponentSchema {
  collectionName: 'components_virohan_offers_virohan_offers';
  info: {
    description: '';
    displayName: 'virohanOffers';
  };
  attributes: {
    brochureLink: Schema.Attribute.String & Schema.Attribute.Required;
    firstOffer: Schema.Attribute.String & Schema.Attribute.Required;
    fourthOffer: Schema.Attribute.String & Schema.Attribute.Required;
    secondOther: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    thirdOffer: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface VirohanValuesVirohanValues extends Struct.ComponentSchema {
  collectionName: 'components_virohan_values_virohan_values';
  info: {
    displayName: 'virohanValues';
  };
  attributes: {
    virohanValue: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhyCourseContentBlockContentBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_content_block_content_blocks';
  info: {
    description: '';
    displayName: 'why-course-content-block';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mediaAndTitleDirectionInDesktop: Schema.Attribute.Enumeration<
      ['left-to-right', 'right-to-left']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left-to-right'>;
    mediaAndTitleDirectionInMobile: Schema.Attribute.Enumeration<
      ['up-to-down', 'down-to-up']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'up-to-down'>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'affiliation-data.affiliation-data': AffiliationDataAffiliationData;
      'award.award': AwardAward;
      'awards.awards': AwardsAwards;
      'badge.badge': BadgeBadge;
      'banner.banner': BannerBanner;
      'blog-banner.blog-banner': BlogBannerBlogBanner;
      'body-description.body-description': BodyDescriptionBodyDescription;
      'bullet-point.bullet-point': BulletPointBulletPoint;
      'business-model.business-model': BusinessModelBusinessModel;
      'business-value.business-value': BusinessValueBusinessValue;
      'campus-media.media': CampusMediaMedia;
      'campus-name.campus-name': CampusNameCampusName;
      'campus.campus': CampusCampus;
      'campus.state-campuses': CampusStateCampuses;
      'cards.cards': CardsCards;
      'career-growth-card.career-growth-card': CareerGrowthCardCareerGrowthCard;
      'career-impact-card.career-impact-card': CareerImpactCardCareerImpactCard;
      'career-option-card.career-option-card': CareerOptionCardCareerOptionCard;
      'centers.centers': CentersCenters;
      'certificate-logos.certificate-logos': CertificateLogosCertificateLogos;
      'choose-virohan.choose-virohan': ChooseVirohanChooseVirohan;
      'city-header.header': CityHeaderHeader;
      'city.city-section': CityCitySection;
      'content.content': ContentContent;
      'coordinate.coordinates': CoordinateCoordinates;
      'course-fee.course-fee': CourseFeeCourseFee;
      'course.courses': CourseCourses;
      'courses.our-courses': CoursesOurCourses;
      'date-text.date-type': DateTextDateType;
      'description.description': DescriptionDescription;
      'district.districts': DistrictDistricts;
      'download-app.download-app': DownloadAppDownloadApp;
      'email.email': EmailEmail;
      'emis.emis': EmisEmis;
      'events-campus-images.events-campus-images': EventsCampusImagesEventsCampusImages;
      'faq.faq': FaqFaq;
      'features-card.features-card': FeaturesCardFeaturesCard;
      'features-content.features-content': FeaturesContentFeaturesContent;
      'features-data.features-data': FeaturesDataFeaturesData;
      'features.features': FeaturesFeatures;
      'fee-cards.fee-cards': FeeCardsFeeCards;
      'fee-plan.fee-plan': FeePlanFeePlan;
      'fees-card.fees-card': FeesCardFeesCard;
      'footer.footer': FooterFooter;
      'form-control.form-control': FormControlFormControl;
      'founder.founder': FounderFounder;
      'founders.our-founders': FoundersOurFounders;
      'hero-bullet-points.hero-bullet-points': HeroBulletPointsHeroBulletPoints;
      'hero.hero': HeroHero;
      'how-we-teach-card.how-we-teach-card': HowWeTeachCardHowWeTeachCard;
      'images.images': ImagesImages;
      'img-carousel.img-carousel': ImgCarouselImgCarousel;
      'infrastructure-images.infrastructure-images': InfrastructureImagesInfrastructureImages;
      'item.item': ItemItem;
      'items.items': ItemsItems;
      'journey-data.journey-data': JourneyDataJourneyData;
      'lead-form.lead-form': LeadFormLeadForm;
      'life-at-virohan.life-at-virohan': LifeAtVirohanLifeAtVirohan;
      'logos.logos': LogosLogos;
      'long-text.long-text': LongTextLongText;
      'lp-campuses.lp-campuses': LpCampusesLpCampuses;
      'lp-centers.lp-centers': LpCentersLpCenters;
      'lp-course-list.lp-course-list': LpCourseListLpCourseList;
      'lp-courses.lp-courses': LpCoursesLpCourses;
      'lp-hero.lp-hero': LpHeroLpHero;
      'lp-jouney.lp-jouney': LpJouneyLpJouney;
      'lp-journey-list.lp-journey-list': LpJourneyListLpJourneyList;
      'lp-love-us-list.lp-love-us-list': LpLoveUsListLpLoveUsList;
      'lp-love-us.lp-love-us': LpLoveUsLpLoveUs;
      'lp-sets-apart-list.lp-sets-apart-list': LpSetsApartListLpSetsApartList;
      'lp-sets-apart.lp-sets-apart': LpSetsApartLpSetsApart;
      'lp-speciality-list.lp-speciality-list': LpSpecialityListLpSpecialityList;
      'lp-speciality.lp-speciality': LpSpecialityLpSpeciality;
      'lp-watch-us-youself-list.lp-watch-us-youself-list': LpWatchUsYouselfListLpWatchUsYouselfList;
      'lp-watch-us.lp-watch-us': LpWatchUsLpWatchUs;
      'media.media': MediaMedia;
      'multiple-choice.multiple-choice': MultipleChoiceMultipleChoice;
      'news-card.news-card': NewsCardNewsCard;
      'numeric-options.numeric-options': NumericOptionsNumericOptions;
      'numeric-text.numeric-text': NumericTextNumericText;
      'options.options': OptionsOptions;
      'our-success.our-success': OurSuccessOurSuccess;
      'overview-badge.overview-badge': OverviewBadgeOverviewBadge;
      'partner-success.success-comp': PartnerSuccessSuccessComp;
      'phone-number.phone-number': PhoneNumberPhoneNumber;
      'program-overview-badge.program-overview-badge': ProgramOverviewBadgeProgramOverviewBadge;
      'questions.questions': QuestionsQuestions;
      'select-options.select-options': SelectOptionsSelectOptions;
      'seo-information.seo-information': SeoInformationSeoInformation;
      'short-text.short-text': ShortTextShortText;
      'state-campus-map.state-campus-mapping': StateCampusMapStateCampusMapping;
      'state-name.state-name': StateNameStateName;
      'state.state': StateState;
      'stats-data.stats-data': StatsDataStatsData;
      'stats.stats': StatsStats;
      'success-stats.success-stats': SuccessStatsSuccessStats;
      'table-content.table-content': TableContentTableContent;
      'table-of-contents.table-of-contents': TableOfContentsTableOfContents;
      'talent-acquisition.talent-acquisition': TalentAcquisitionTalentAcquisition;
      'testiminial-data.testimonial-data': TestiminialDataTestimonialData;
      'testimonials.testimonials': TestimonialsTestimonials;
      'thankyou-screen.thankyou-screen': ThankyouScreenThankyouScreen;
      'title-keywords.title-keywords': TitleKeywordsTitleKeywords;
      'videos.videos': VideosVideos;
      'virohan-in-news.virohan-in-news': VirohanInNewsVirohanInNews;
      'virohan-offer.what-we-offer': VirohanOfferWhatWeOffer;
      'virohan-offers.virohan-offers': VirohanOffersVirohanOffers;
      'virohan-values.virohan-values': VirohanValuesVirohanValues;
      'why-course-content-block.content-block': WhyCourseContentBlockContentBlock;
    }
  }
}
