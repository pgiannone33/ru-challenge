# ru-challenge
It is a repository for the RU challenge: creating new transformations

### ADD INTERNATIONAL PREFIX

- Suppose you are an e-commerce business that operates in multiple countries and receives orders from customers all over the world. To ensure smooth communication with your customers, you need to store their phone numbers with the correct international prefix. However, manually formatting each phone number can be time-consuming and error-prone, especially if you have a large customer base. By using the Rudderstack transformation I've developed, you can automate the process of adding the international prefix to each phone number, ensuring that your customer data is consistent and accurate.

- International phone numbers can present a challenge for businesses that operate across borders. With different countries using different numbering systems, it can be difficult to ensure consistency and accuracy when handling contact data. That's why I've developed a Rudderstack transformation that adds an 'internationalCode' field to phone number data, along with a 'formattedPhone' field that includes the full international prefix. By using this transformation, businesses can ensure that their phone number data is correctly formatted.

- Please note that in order for the transformation to work correctly, it requires the presence of the 'country' field in English and the 'phone' field in the event object. In the provided code, these fields are accessed using the following lines:

    const country = event.context.traits.country;
    const phone = event.context.traits.phone;

Therefore, it's important to ensure that these fields are present and correctly formatted in the incoming data for the transformation to function as intended.


    export async function transformEvent(event) {
        const country = event.context?.traits?.country;
        const phone = event.context?.traits?.phone;
    
        if (country && phone) {
            const response = await fetch(`https://restcountries.com/v2/name/${country}?fullText=true&fields=callingCodes`);
            const internationalCode = response?.[0]?.callingCodes?.[0] || "";
            event.context.traits.internationalCode = internationalCode;
            event.context.traits.formattedPhone = addInternationalCode(phone, internationalCode);
        }
    
        return event;
    }
    
    function addInternationalCode(phoneNumber, internationalCode) {
      const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`;
      if (formattedPhone.startsWith(`+${internationalCode}`)) {
        return formattedPhone;
      } else {
        return `+${internationalCode}${formattedPhone.slice(1)}`;
      }
    }
    