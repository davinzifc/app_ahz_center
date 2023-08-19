export const LEGAL: LegalInterface = {
  title: 'Terms and conditions of use',
  description:
    'Welcome to the Alzh Center application. By registering and using the Application, you agree to comply with the following terms and conditions, as well as our Privacy Policy. Please read them carefully before using the Application.',
  terms: [
    {
      description: 'Use and Treatment of Data',
      subTerms: [
        {
          description:
            'By registering with the Application, you acknowledge and understand that we will collect, store, and process your personal data as outlined in our Privacy Policy.',
          subTerms: [],
        },
        {
          description:
            'You acknowledge that Alzh Center may share your personal data with third-party applications endorsed by us to enhance the services provided and the functionality of the Application.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Third-Party Applications',
      subTerms: [
        {
          description:
            'Alzh Center may collaborate with third-party applications endorsed by us. By using such applications, you agree that your personal data may be shared with these third-party applications and will be treated in accordance with their own privacy policies.',
          subTerms: [],
        },
        {
          description:
            'You agree to obtain the appropriate approval from individuals or entities before sharing their data with Alzh Center through third-party applications, releasing Alzh Center from any legal liability arising from the lack of approval.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Data Confidentiality',
      subTerms: [
        {
          description:
            "Data stored in the Application's database is confidential and will be treated as such during and after ceasing to use the Application.",
          subTerms: [],
        },
        {
          description:
            'Users with a doctorate degree and administrators must maintain full discretion over patient and user data. Data can only be made public if the patient provides explicit consent.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'User Responsibility',
      subTerms: [
        {
          description:
            'Users of the Application are responsible for proper data handling and their conduct within the platform.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Approval of Data Use and Treatment',
      subTerms: [
        {
          description:
            'Both users and patients must approve the use and processing of their personal data by Alzh Center, in accordance with the terms outlined in the Privacy Policy.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Modifications',
      subTerms: [
        {
          description:
            'Alzh Center reserves the right to modify these terms and conditions at any time. Modifications will take effect upon being published within the Application.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Contact',
      subTerms: [
        {
          description:
            'If you have questions or concerns regarding these terms and conditions, please contact us through the channels indicated in the Application.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Penalties for Non-Compliance',
      subTerms: [
        {
          description:
            'Alzh Center reserves the right to impose appropriate penalties for violations of the terms and conditions set forth in this document. The severity of the committed action will determine the nature of the penalty.',
          subTerms: [],
        },
        {
          description:
            'Penalties may range from warnings and temporary suspensions to permanent prohibition of access and use of the Application, as well as consideration of legal actions as appropriate.',
          subTerms: [],
        },
        {
          description:
            'If deemed necessary, Alzh Center may initiate legal proceedings against users or applications that seriously violate the terms and conditions, without prejudice to other available legal remedies.',
          subTerms: [],
        },
        {
          description:
            'Alzh Center reserves the right to assess each case individually and take actions deemed appropriate to safeguard the interests of the platform and its users.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Final Provisions',
      subTerms: [
        {
          description:
            'These terms and conditions constitute the entire agreement between the user and Alzh Center regarding the use of the Application and supersede any prior agreements, whether written or oral.',
          subTerms: [],
        },
        {
          description:
            'If any provision of these terms and conditions is deemed invalid or unenforceable by a competent court, the remaining provisions will remain fully valid and applicable.',
          subTerms: [],
        },
        {
          description:
            'Any waiver of rights or provisions contained in these terms and conditions will only be effective if made in writing and signed by an authorized representative of Alzh Center.',
          subTerms: [],
        },
        {
          description:
            'The failure to enforce any provision of these terms and conditions at any given time will not be considered a waiver of that provision or any other rights under this document.',
          subTerms: [],
        },
      ],
    },
    {
      description: 'Jurisdiction and Applicable Law',
      subTerms: [
        {
          description:
            'These terms and conditions will be governed and interpreted in accordance with the laws of Colombia, without regard to its conflicts of laws provisions.',
          subTerms: [],
        },
        {
          description:
            'Any dispute arising in connection with these terms and conditions will be subject to the exclusive jurisdiction of the competent courts in Colombia.',
          subTerms: [],
        },
      ],
    },
  ],
};

interface LegalInterface {
  title: string;
  description: string;
  terms: TermsInterface[];
}

interface TermsInterface {
  description: string;
  subTerms: TermsInterface[];
}
