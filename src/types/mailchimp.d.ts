declare module "@mailchimp/mailchimp_marketing" {
  interface MailchimpConfig {
    apiKey: string;
    server: string;
  }

  interface MailchimpMember {
    email_address: string;
    status: "subscribed" | "unsubscribed" | "cleaned" | "pending";
    merge_fields?: Record<string, unknown>;
  }

  interface MailchimpLists {
    addListMember(listId: string, member: MailchimpMember): Promise<unknown>;
  }

  interface MailchimpClient {
    setConfig(config: MailchimpConfig): void;
    lists: MailchimpLists;
  }

  const mailchimp: MailchimpClient;
  export default mailchimp;
}
