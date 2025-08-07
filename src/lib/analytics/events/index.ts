export enum AnalyticsEvent {
    PAGE_VIEW = 'PAGE_VIEW',
    VIEWED_ABOUT_SECTION = 'VIEWED_ABOUT_SECTION',
    VIEWED_PROJECTS_SECTION = 'VIEWED_PROJECTS_SECTION',
    VIEWED_CONTACT_SECTION = 'VIEWED_CONTACT_SECTION',
    CLICKED_LINK = 'CLICKED_LINK',
    FORM_SUBMITTED = 'FORM_SUBMITTED',
    FORM_INPUT_FIELD_FOCUSED = 'FORM_INPUT_FIELD_FOCUSED',
};

export interface EventPayload {
    [AnalyticsEvent.CLICKED_LINK]: {
        link: string;
        linkType: 'sectionRedirect' | 'externalRedirect';
        section?: string;
    };
    [AnalyticsEvent.FORM_SUBMITTED]: {
        subject: string;
        message: string;
    };
    [AnalyticsEvent.FORM_INPUT_FIELD_FOCUSED]: {
        fieldName: string;
        timestamp: string;
    };
}


export type AnalyticsEventPayload<T extends AnalyticsEvent> = T extends keyof EventPayload ? EventPayload[T] : never;
