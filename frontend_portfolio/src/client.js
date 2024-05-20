import {  createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'imtri8ks',
    dataset: 'production',
    apiVersion: '2024-05-15',
    useCdn: true,
    token: 'skDwItinHpTTow6iP9Y8m17kPqcqo2H9BdKtePH0X7F7gHHI0NhRC8Zcn4b5y7IJxUOql9XiLQ2Y6c02seYD23vSysLwz06VWwT5hzBDDUTV3WGKsrGuZHIZNZwdkqm7hY78m4DvO2VfEyASTwC1tqCgPLCcPOZnC4ud64RflNL8FJtYkcVs',
});

const builder = imageUrlBuilder(client);

export const urlFor= (source)=> builder.image(source);