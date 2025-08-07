import { getItem, STORAGE_KEYS, setItem } from "../localstorage";
import { AnalyticsEvent, AnalyticsEventPayload } from "./events";
import axios from "axios";

export interface UserEvent {
    id: string;
    userId: string;
    eventGeneratedId: string | null;
    eventName: string;
    appName: string;
    metaData: Record<string, any> | null;
    createdAt: Date;
    updatedAt: Date;
}

export type UserLoginSchema = {
    appName: string;
    metaData: Record<string, any> | null;
    eventGeneratedId: string | null;
    name: string;
    phone: string;
    email: string | null;
};

export type UserEventSchema = {
    userId: string;
    eventName: string;
    appName: string;
    metaData: Record<string, any> | null;
};

export const trackEvent = async <E extends AnalyticsEvent>(
    event: E,
    data?: AnalyticsEventPayload<E>
) => {
    const userId = getItem(STORAGE_KEYS.EVENT_LOGGER_USER_ID);
    const eventGeneratedId = getItem(STORAGE_KEYS.EVENT_LOGGER_GENERATED_ID);

    const appName = "WEBSITE";
    try {
        const reponse = await axios.post<{ message: string; data: UserEvent }>(
            `${import.meta.env.VITE_TRACKER_API_URL}event/create`,
            {
                eventName: event,
                appName,
                metaData: {
                    ...data,
                    project_name: "WEBSITE",
                    page_url: window.location.href,
                    ...(document.referrer ? { page_referrer: document.referrer } : {}),
                },
                ...(userId && { userId }),
                ...(eventGeneratedId && !userId ? { eventGeneratedId } : {}),
            }
        );

        if (!userId && !eventGeneratedId && reponse.data.data.eventGeneratedId) {
            setItem(
                STORAGE_KEYS.EVENT_LOGGER_GENERATED_ID,
                reponse.data.data.eventGeneratedId
            );
        }
    } catch (error) {
        console.error(error);
    }
};

export const loginEvent = async (data: {
    name: string;
    phone: string;
    email?: string;
}) => {
    const userId = getItem(STORAGE_KEYS.EVENT_LOGGER_USER_ID);

    if (userId) return;

    const eventGeneratedId = getItem(STORAGE_KEYS.EVENT_LOGGER_GENERATED_ID);

    const appName = "WEBSITE";

    const payload: UserLoginSchema = {
        appName,
        metaData: null,
        eventGeneratedId: eventGeneratedId ?? null,
        name: data.name,
        phone: data.phone,
        email: data.email ?? null,
    };

    try {
        const { data: reponse } = await axios.post<{ data: UserEvent }>(
            `${import.meta.env.VITE_TRACKER_API_URL}event/login`,
            payload
        );
        const typedResponse = reponse.data;

        if (typedResponse.userId) {
            setItem(STORAGE_KEYS.EVENT_LOGGER_USER_ID, typedResponse.userId);
        }
    } catch (error) {
        console.error(error);
    }
};
