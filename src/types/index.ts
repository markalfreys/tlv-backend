export type DomainInformationType = {
    domainName: string,
    registrar: string,
    registrationDate: string,
    expirationDate: string,
    estimatedDomainAge: number,
    hostnames: string,
}

export type ContactInformationType = {
    registrantName: string,
    technicalContactName: string,
    administrativeContactName: string,
    contactEmail: string
}

export type DomainDetailsType = {
    domainInformation: DomainInformationType,
    contactInformation: ContactInformationType
}

export type WhoisDataType = {
    WhoisRecord: {
        domainName: string,
        registrarName: string,
        createdDate: string,
        expiresDate: string,
        estimatedDomainAge: number,
        nameServers:{
            hostNames: string[] | []
        }
        registrant: { name: string },
        technicalContact: { name: string },
        administrativeContact: { name: string }    
        contactEmail: string,
    }
}
    