const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to A.A.M.F.T. resources! Can I answer any of your questions?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const studentMembershipIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'studentMembershipIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'students who are currently enrolled in an accredited educational institution for bachelor’s or master’s degree program in a Marriage and Family Therapy or related mental health field';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const approvedSupervisorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'approvedSupervisorIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T. Approved Supervisor Designation is the highest and most prestigious designation in the M.F.T. field. Approved Supervisors fulfill stringent education and clinical training requirements to achieve this designation. Becoming an A.A.M.F.T. Approved Supervisor demonstrates a strong commitment of developing one’s supervisory skills as well as helping the next generation of systemic family therapists. It is recognized globally and accepted by most US state licensing boards requiring MFT supervision.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CEUIntnetHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CEUIntnet';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T. offers online continuing education hours that are approved by many state regulatory boards. Please check with your board for specifics on regulations and number of hours that can be earned through online courses.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const howManyAAMFTMembersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'howManyAAMFTMembersIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T. has a membership base of over 24,000 members';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const relationshipTipIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'relationshipTipIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Do not keep a running tally of who does more in the relationship.  Keeping score will harm your relationship. Do not assume your partner knows what you are thinking.  No one is a mind-reader. When you disagree, remember there is more than one solution. Look for common ground and build on it. Avoid starting conversations personally attacking each other. Regularly show your appreciation and affection for each other. Work to resolve a conflict, not win an argument';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InclusionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InclusionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Diversity is a reality of life reflected in the broadest spectrum of the many different ways that individuals identify and exist in the world. Inclusion is acknowledging and appreciating the reality and value of our diversity, intentionally enlisting and engaging the spectrum of different identities and experiences, and respecting what each person brings to the organization. We acknowledge that societal power structures, tensions, and complexities related to diversity contribute to disparities in power, control, influence, status, privilege, and opportunities among individuals and groups. Therefore, our commitment to inclusion involves the continuous identification and effective elimination of barriers to access to association roles, resources, and relationships, and to creation of systems of excellence that promote equity for all. It is a core value in A.A.M.F.T. to support, promote, and protect diversity, to value all individuals and groups as free from prejudice and oppression as possible, and to foster a climate where equity and mutual respect are intrinsic.  By appreciating the importance of inclusion, we acknowledge that the collective and individual talents, skills, and perspectives of members, constituent groups, and partners foster a culture of belonging, collaborative practice, innovation, and mutual respect. Diversity of thought and inclusion of new ideas and perspectives can help us increase creativity, generate new ideas, enhance problem solving, and increase flexibility, productivity, and effectiveness. A.a.m.f.t. is committed to providing an inclusive environment for all, regardless of gender, age, gender identity, race, health status, national origin, relationship status, sexual orientation, disability, ethnicity, socioeconomic status, and religion. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const AAMFTJournalsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AAMFTJournalsIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T. is pleased to provide members with a complimentary subscription to the Journal of Family Therapy and the Australian and New Zealand Journal of Family Therapy. The Journal of Family Therapy is published on behalf of the UK Association for Family Therapy and Systemic Practice. The Journal of Family Therapy seeks to advance the understanding of human systems such as couples, families, professional networks and wider groups, and how to most effectively intervene in such systems. It will publish articles on theory, research, practice and training, which are written in language that is accessible both to family therapists and other disciplines. The high-profile editorial board includes leading academics and professionals from around the world in keeping with an intention to attract a high standard of international contributions, which will have global reach and influence.  All members of AAMFT may access all online content for JOFT on the Wiley-Blackwell website as part of their membership benefits. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InterestNetworksIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InterestNetworksIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.a.m.f.t. offers engagement programs that are designed to enhance your member experience. With opportunities to get involved at the leadership level, advocacy efforts, and peer or training relationships, A.A.M.F.T. engagement programs offer a key way to expand your membership and make vital connections to drive your career.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const therapyTopicsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'therapyTopicsIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Therapy Topics are brochures that contain easy-to-understand information and resources and discuss the role of marriage and family therapists in treating problems affecting the public. Written for clients and potential clients, Therapy Topics are designed to educate consumers and market therapists services. More info can be found on our website at w.w.w. dot a.a.m.f.t. dot org backslash therapy topics. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const contactAAMFTIntnetHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'contactAAMFTIntnet';
    },
    handle(handlerInput) {
        const speakOutput = 'The American Association for Marriage and Family Therapy is located at 112 South Alfred Street, in Alexandria Virginia 22314. We can be reached by phone at 703-838-9808. You can also email us at central at a.a.m.f.t dot org. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MFTDefinitionIntnetHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MFTDefinitionIntnet';
    },
    handle(handlerInput) {
        const speakOutput = 'Marriage and family therapists are mental health professionals trained in psychotherapy and family systems, and licensed to diagnose and treat mental and emotional disorders within the context of marriage, couples and family systems. We are a highly experienced group of practitioners, with an average of 13 years of clinical practice in the field of marriage and family therapy. We evaluate and treat mental and emotional disorders, other health and behavioral problems, and address a wide array of relationship issues within the context of the family system. Marriage and family therapists broaden the traditional emphasis on the individual to attend to the nature and role of individuals in primary relationship networks such as marriage and the family.  We take a holistic perspective to health care, concerned with the overall, long-term well-being of individuals and their families. Marriage and family therapists have graduate training in marriage and family therapy and at least two years of clinical experience. Marriage and family therapists are recognized as a core mental health profession, along with psychiatry, psychology, social work and psychiatric nursing.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const renewMembershipIntnentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'renewMembershipIntnent';
    },
    handle(handlerInput) {
        const speakOutput = 'Members can renew their membership by visiting a.a.m.f.t. dot org backslash join now';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const AAMFTBoardContactIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AAMFTBoardContactIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Members can reach the board by emailing board at a.a.m.f.t. dot org.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SystemicTherapyDefinitionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SystemicTherapyDefinitionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Systemic therapy explores the broader relationships in which a person is embedded, and the unit of treatment is not just the individual, even if a single person is involved in therapy. A.a.m.f.t. offers a handbook on systemic therapy that is available for purchase on our website at www dot a a m f t.org';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ethicsComplaintIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ethicsComplaintIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Complaints of unethical conduct must be initiated by someone with personal knowledge of the alleged behavior or by someone in a position to supply relevant reliable testimony or other evidence on the subject. To obtain a complaint packet, you can send an email to ethics at a.a.m.f.t. dot org or contact A.A.M.F.T. by phone at 703-838-9808. Or book a consultation on our website at www dot a.a.m.f.t dot org/bookaconsultation';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const AAMFTdefinitionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AAMFTdefinitionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The American Association for Marriage and Family Therapy is the professional association for the field of marriage and family therapy.  A.A.M.F.T. represents the professional interests of more than 50,000 marriage and family therapists throughout the United States, Canada, and abroad.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MFPIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MFPIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T\'s Minority Fellowship Program supports the training of culturally competent mental health and substance abuse researchers and practitioners. The A.A.M.F.T. Research and Education Foundation exists to fund systemic and relational research, scholarships, and education to support and enhance the practice of systemic and relational therapies, to advance the health care continuum, and to improve client outcomes. More information on the Minority Fellowship Program can be found on their website at a.a.m.f.t. foundation.org.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const SimulationTherapyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SimulationTherapyIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T\'s mixed reality simulation program is designed as a learner focused way to enhance clinical skill development without doing harm to real clients. More information on simulation therapy can be found on our website at a.a.m.f.t dot org/simulation.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CertificationBadgesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CertificationBadgesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.A.M.F.T.\'s certification badges are digital badges that can be used in email signatures or digital resumes and on social media sites such as LinkedIn, Facebook, and Twitter. This digital image contains verified metadata that describes your qualifications and the process required to earn them.  ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const FamilyTeamIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FamilyTeamIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The Family TEAM is a network of advocates who volunteer a bit of time and energy toward furthering marriage and family therapy policy interest. Members can join the family team on our website.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ResearchJournalntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResearchJournalntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The Journal of Marital and Family Therapy is the flagship journal of the American Association of Marriage and Family Therapy and the largest circulation family therapy journal in the world.  This Journal publishes articles on research, theory, clinical practice, and training in marital and family therapy.  ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const COEIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'COEIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The A.a.m.f.t code of ethics can be found on our website at a.a.m.f.t. dot org/c.o.e. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ClincialFellowDesignationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ClincialFellowDesignationIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The Clinical Fellow Designation indicates a therapist has completed the rigorous training standards for independent practice of marriage and family therapy and are held to the highest ethical standards. Clinical Fellow Designees demonstrate specific education, clinical training, and supervision in systemic marriage and family therapy. A.A.M.F.T. Clinical Fellow Designation is recognized by the U.S. state licensure boards and worldwide as the standard for education and training in systemic therapy. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PFMIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PFMIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'The Professional Membership is open to individuals who are Fully licensed or practicing independently as a Systemic Family Therapist or M.F.T. in a related mental health field and have received an accredited bachelors, masters, or doctorate in Marriage and Family Therapy or a related mental health field which meets the criteria established by the Board and who are interested and supportive of A.A.M.F.T.\'s mission to advance Marriage and Family Therapy or Systemic Family Therapy as a profession and field of study.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MembershipTypesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MembershipTypesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'A.a.m.f.t. offers two membership types, the student membership for students who are currently enrolled in an accredited educational institution for bachelors or masters degree program. The professional membership open to individuals who have received an accredited bachelors, masters, or doctorate in Marriage and Family Therapy or related mental health field. Ask me more about the individual memberships for more information.' ;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        studentMembershipIntentHandler,
        approvedSupervisorIntentHandler,
        CEUIntnetHandler,
        howManyAAMFTMembersIntentHandler,
        relationshipTipIntentHandler,
        InclusionIntentHandler,
        AAMFTJournalsIntentHandler,
        InterestNetworksIntentHandler,
        therapyTopicsIntentHandler,
        contactAAMFTIntnetHandler,
        MFTDefinitionIntnetHandler,
        renewMembershipIntnentHandler,
        AAMFTBoardContactIntentHandler,
        SystemicTherapyDefinitionIntentHandler,
        ethicsComplaintIntentHandler,
        AAMFTdefinitionIntentHandler,
        MFPIntentHandler,
        SimulationTherapyIntentHandler,
        CertificationBadgesIntentHandler,
        FamilyTeamIntentHandler,
        ResearchJournalntentHandler,
        COEIntentHandler,
        ClincialFellowDesignationIntentHandler,
        PFMIntentHandler,
        MembershipTypesIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
