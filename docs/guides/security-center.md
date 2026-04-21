# Security Center

## Security Measures

<a id="security-measures-120738"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26148&docId=120738&lang=en_US>

**1\.  Introduction**

 

1\.1  These Security Measures for Service Providers (“**Guidelines**”) set out the technical security requirements which the Service Provider has to fully comply with and forms a part of the Terms of Use between Lazada and the Service Provider.

 

1\.2  In these Measures, unless the context otherwise requires, the following expressions shall have the following meaning: 

- “**ITSM**” means an IT security manager.
- “**ITSO**” means an IT security officer.
- “**Lazada** **Representative**” means Lazada’s employees who liaise with and/or provide instructions to the Service Provider.
- “**Service Provider**” means you, or means the entity (if any) for which you are acting on behalf of by entering into the Terms of Use.
- “**Services**” means the services which the Service Provider provides to Lazada pursuant to any written agreement which these Guidelines are expressly incorporated into by reference, which shall include without limitation the Terms of Use.
- “**Sub\-Service Provider**” means the Service Provider’s sub\-contractor, provided that (a) subcontracting is expressly permitted by the Terms of Use or by the terms of any other written agreement between Lazada and the Service Provider relating to the Services and/or the System; and (b) the prior written approval of Lazada has been obtained by the Service Provider from Lazada to Service Provider’s engagement of the sub\-Service Provider in question; and
- “**System**” means all application(s) that interact and/or has been implemented by Service Provider for Lazada for the purposes of providing the Service Provider’s Services.

 

 

**2\.  Security Objectives**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 2\.1 | The Service Provider shall provide its Services in accordance with the security requirements as specified in these Measures. |
| 2\.2 | The Service Provider shall implement security controls that can be integrated with, and work with the systems and services provided by other Lazada\-appointed suppliers/Service Providers. |
| 2\.3 | The Service Provider shall incorporate the following security principles in the design, implementation and operation of the System:  (a) Confidentiality: non\-disclosure of information to unauthorised entities;  (b) Compliance: conformance to established regulations and standards;   (c) Availability: accessible and usable when authorised entities demand access;  (d) Authentication: verification of identities of entities and their claimed attributes;  (e) Accountability: traceability of an entity’s actions to the entity;  (f) Non\-repudiation: assurance of authenticity;  (g) Integrity: accurate and complete information within the System; and (h) Access control: selective authorisation and restricted access or use of assets. |
| 2\.4 | Upon Lazada’s request, the Service Provider shall promptly submit a third party penetration testing report by a certified penetration tester, or a SOC2 / ISO/IEC 27001 certification covering the provision of any proposed software or Software as a Service (SaaS). |
| 2\.5 | The Service Provider shall provide, all information and security limitations relating to the security design and implementation of the System. |
| 2\.6 | The Service Provider shall implement security controls to protect the System against unauthorised access, data loss, intrusion, malicious software infection, software vulnerability attacks, and hardware thefts or attacks. |
| 2\.7 | The Service Provider shall implement the System with no known security backdoors and loopholes. |
| 2\.8 | The Service Provider shall implement the System with no unauthorised code. |
| 2\.9 | The Service Provider shall implement appropriate control measures to protect all data, in storage, during processing and during transit. |
| 2\.10 | The Service Provider shall document all processes, procedures and control measures adequately and properly. |
| 2\.11 | The Service Provider shall implement and deploy all items of the System with configurations that are security hardened and would address all security vulnerabilities. |
| 2\.12 | The Service Provider shall have an effective patch management program in place and implement security changes, patches and upgrades in Systems, applications, and databases in a timely manner in accordance with the risk levels. |
| 2\.13 | The Service Provider shall ensure that the System is resilient against known cyber\-attacks and easily reconfigurable to respond to new security threats that may Lazada from time to time. |

 

 

**3\.  General Security**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 3\.1 | The Service Provider shall comply with all security policies, security standards, security guidelines, and security frameworks that may be issued by  Lazada  from time to time and implement all changes requested by Lazada without delay. |
| 3\.2 | The Service Provider shall perform security risk assessments on the System pursuant to Clause 12 and maintain an updated risk register. |
| 3\.3 | The Service Provider shall develop and maintain security policies, security architecture, standards, procedures and processes in accordance with industry standards and best practices. The Service Provider shall keep all such documentation updated and  demonstrate the same to Lazada when requested. |
| 3\.4 | Where programming is required, the Service Provider shall adopt secure coding practices. The Lazada Representative shall have the right to review software security audit or test reports generated by the Service Provider and the reports generated from the Service Provider’s source code analysis tools. The Service Provider’s source code analysis tools shall be subjected to Lazada’s review when so required. |
| 3\.5 | Lazada reserves the right to audit the information security controls and processes of the Service Provider and to perform relevant tests to ensure that it is compliant with applicable information security and privacy requirements as well as the requirements under the Terms of Use. |
| 3\.6 | If the Lazada Representative performs security assessments, security reviews, security audits, surveys, penetration tests, and investigations (including forensics) on the System, the Service Provider shall cooperate and furnish all requested materials in a timely manner, including remediation of all security findings as per clause 12\.3\. |
| 3\.7 | The Service Provider shall install endpoint protection agents on the System to protect against any potential data leakages. |

 

 

**4\.  Cryptography And Digital Certificate Standard**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 4\.1 | **Cryptography Standards** The Service Provider shall use industry\-recognised strong cryptography standards for symmetric encryption, digital signature, hashing, key exchanges, random number generators and message authentication codes. |
| 4\.2 | Proper key management processes must be in place to protect the cryptography keys throughout their lifecycle. |
| 4\.3 | **Digital Certificate Standards** The Service Provider shall use industry\-recognised strong digital certificate standards for the implementation of digital certificate and certificate revocation lists in the System. |

 

 

**5\.  Authentication And Access**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 5\.1 | The Service Provider shall implement industry\-approved access and authentication mechanisms and perform periodic reviews. |
| 5\.2 | The Service Provider shall ensure that 2\-Factor Authentication must be enabled for all Systems processing personal data. |
| 5\.3 | Where Virtual Private Network (“VPN”) is required, the Service Provider shall implement industry\-approved VPN mechanisms. |

 

 

**6\.  User Access Management For Service Provider's Personnel**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 6\.1 | The Service Provider shall implement control measures to protect all account credentials with access to the System. Upon request by the Lazada Representative, the Service Provider shall provide detailed documentation on the control measures and processes (which shall minimally include the security features, technologies, administration usage processes and procedures that will be utilized). |
| 6\.2 | The Service Provider shall implement appropriate password policies/guidelines/standards and ensure that passwords comply with such policies/guidelines/standards and in any event, with all requirements set out in this Clause 6\. |
| 6\.3 | The Service Provider shall ensure that passwords are not displayed or transmitted in clear text. |
| 6\.4 | Where passwords are generated or selected by the System for user/admin/root login (“default password”), the Service Provider shall ensure a compulsory password change is done immediately after the first user login. |
| 6\.5 | All passwords shall contain a minimum of eight (8\) characters and comprise at least two (2\) of the following four (4\) categories: (a) upper case (A through Z); (b) lower case (a through z); (c) digits (0\-9\); and (d) special characters (! $, \#, %, etc.) |
| 6\.6 | The Service Provider shall ensure all passwords are compared against a list that contains values known to be commonly\-used, expected, or compromised. If the chosen password is found in the list, the Service Provider shall ensure that they choose a different password. |
| 6\.7 | The Service Provider shall ensure that all account passwords are changed periodically based on the system criticality in line with industry standards. |
| 6\.8 | The Service Provider shall enforce password history as per industry standards and best practices. |
| 6\.9 | For system administration and other privileged user access, such as server console access, the Service Provider shall deploy authentication mechanisms specified in Clause 5\.1\. |
| 6\.10 | The Service Provider shall disallow multiple concurrent logins using the same credentials. |
| 6\.11 | The Service Provider shall ensure that accounts are locked out after 5 unsuccessful login attempts. |
| 6\.12 | The Service Provider shall implement timeout or automatic logout features to the System for connections that are inactive for more than 10 minutes. |
| 6\.13 | The Service Provider shall ensure that all system administrative and functional system accounts created or used by the Service Provider’s personnel are not shared. |
| 6\.14 | The Service Provider shall implement security measures and processes to prevent system administrators, database administrators and other privileged users from any unauthorised access to users’ information. The Service Provider shall ensure that the logs are monitored to identify any unauthorised access. |
| 6\.15 | The Service Provider shall log all authentication events, whether successful or failed. |
| 6\.16 | The Service Provider shall manage all privileged accounts as follows: (a)    Only authorised administrators who require such access to perform their job functions can be assigned privileged accounts on a need\-to\-know basis; (b)    All privileged account request(s) must go through an approval and authorisation process before access is granted to the administrator(s) for whom the privileged account request(s) are made; (c)    All privileged accounts must be recorded by the Service Provider; (d)    Individual privileged accounts and passwords must be created for and assigned to individual owners for accountability and traceability; (e)    An account for which the account password is collectively defined by the passwords from multiple custodians in accordance with this Clause, or a “shared privileged account”, shall have its ownership assigned to each of the specific custodians for accountability; (f)     Privileged accounts must be disabled and removed when the administrators change their job function or leave the organisation, or when the accounts are no longer needed; (g)    Whenever possible, system built\-in privileged accounts shall be removed. If the system built\-in privileged accounts cannot be removed, they shall be renamed and the password must be changed immediately, and then disabled where possible; (h)    All privileged accounts must be subject to regular reviews; and (i)     All administrative changes performed using privileged accounts shall have audit trails to facilitate investigation if required. |
| 6\.17 | The Service Provider shall ensure that all system/services accounts comply with the requirements set out in Clause 6 herein. In addition, for system/services accounts, the Service Provider shall ensure that strong and complex passwords are used and changed on a periodic basis. |

### 

### 

### **7\.  System Security**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 7\.1 | The Service Provider shall ensure there are security hardening baselines for the System and system hardening frameworks to govern the process to harden all systems and applications in accordance with industry standards. |
| 7\.2 | The Service Provider shall, at the minimum, perform the following pre\-requisite activities for all items of the System to be connected to Lazada networks :  (a) Apply latest patches of all items of the System; and (b) Apply latest anti\-malware signatures.  These need to be applied in accordance with the timeframe as specified in their vulnerability management program. |
| 7\.3 | Where digital certificates are required, the Service Provider shall: (a) deploy certificates signed by appropriate certifying authorities on the limitation and implement mitigation measures; and (b) develop and implement a tracking mechanism to ensure timely renewal of the digital certificates in accordance with industry standards. In the event that such certificates cannot be used, the Service Provider shall provide documentation or evidence from the product principal(s). |
| 7\.4 | The Service Provider shall propose and implement appropriate security measures and procedures to minimise the risk of introducing malicious content into the System and network. |
| 7\.5 | The Service Provider shall remove all test data, test accounts and test credentials from the System before commissioning date and/or the date stipulated by the Lazada Representative. |
| 7\.6 | All accounts shall be assigned with least privileges and need\-to\-know basis only. |
| 7\.7 | The Service Provider shall synchronise the time of all items of the System. |
| 7\.8 | The Service Provider shall implement audit trail and monitoring mechanisms for all security events including authentication, anomalous activity and all privileged roles activities, such as configuration changes performed. |
| 7\.9 | The Service Provider shall turn on audit trails of the System and take all necessary steps to protect the audit trails from unauthorised access and accidental and/or deliberate modification or overwriting. |
| 7\.10 | The Service Provider shall ensure adequate information is captured in the audit trail to facilitate monitoring and investigation. Details should include the following but not limited to: a) user identity; b) date and timestamp of information access; c) what information was accessed; d) details of access (e.g. modification); e) source IP address from where the request originated from; f) Records of all successful and unsuccessful log\-on attempts (logon and logoff); g) Records of any log\-on attempts made from an unknown userID and/or workstation ID; h) Records of all privileged operations (i.e. use of admin / super user accounts); i) Records of all updates/changes to userID access rights; and j) Records of all attempts to delete, write or append certain predefined data entities, or any changes made in their classification label. |
| 7\.11 | The Service Provider shall maintain a technical security architecture diagram with unique names for all the elements, platforms and/or servers, addresses and connections (with all details) towards other elements, platforms and/or servers and submit them when requested by the Lazada Representative. |

 

 

**8\.  Information Handling**

 

| **Ref \#** | **Requirement Description** |
| --- | --- |
| 8\.1 | The Service Provider and all its personnel shall safeguard all information that is entrusted to them. The Service Provider shall ensure that all information entrusted is used only for authorized purposes. |
| 8\.2 | In the event the Service Provider requires any information to be sent to any third parties, the Service Provider shall ensure that there are legal agreements in place to govern such information\-sharing and proper due diligence is conducted before information is shared. |
| 8\.3 | The Service Provider shall sanitize the information through methods such as obfuscation or masking of sensitive data, sensitive before releasing the approved information to relevant parties pursuant to Clause 8\.2\. |
| 8\.4 | The Service Provider shall propose measures to protect information against accidental or unlawful loss, as well as unauthorised access, disclosure, copying, use, or modification. The Service Provider shall implement and document such measures which shall include administrative, technical, physical and personnel control measures. The documentation of such measures shall be made available to the Lazada Representative when requested. |
| 8\.5 | If the Service Provider suspects or detects any loss of information, the Service Provider shall notify the Lazada Representative immediately. The Service Provider shall take preventive measures to prevent further loss of information and perform investigations to ascertain the root cause of the loss of information. The Service Provider shall take instructions from the Lazada Representative for any further actions that may be required. |
| 8\.6 | The Service Provider shall not remove or retain, and shall ensure that its personnel, agents, directors, officers, servants and employees shall not remove or retain any information when they are no longer assigned to support the System. |
| 8\.7 | The Service Provider shall handle and transfer information to Lazada via secured channel(s) specified by Lazada representative. |
| 8\.8 | The Service Provider shall ensure all personal data (including but not limited to the Customer Name, Phone Number, Email Address, and Address) to be encrypted both in storage and in transit. Encryption algorithm must be based on recommended industry standards. |
| 8\.9 | The Service Provider shall carry out irreversible anonymisation of personal data (including but not limited to the Customer Name, Phone Number, Email Address, and Address ) as soon as the retention of such data is no longer necessary for the purposes of processing (which shall, in any event, be no longer than ninety (90\) days). |

 

 

**9\.  Log And Media Sanitization And Disposal**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 9\.1 | The Service Provider shall implement log sanitization processes, media sanitization processes and any other mechanisms to protect Lazada’s information. The processes and procedures shall be submitted to the Lazada Representative when requested. |
| 9\.2 | If the Service Provider is required to send any log information, packet captures or any debug information to Lazada\-appointed suppliers or personnel not assigned to support the System, the Service Provider shall comply with the process specified in Clause 8\.3\. |
| 9\.3 | The Lazada Representative shall have the right to validate the sanitised logs, packet captures, and debug information on a random sampling basis. |
| 9\.4 | The Service Provider shall develop standard operating procedures (SOP) to securely dispose Lazada data in accordance with industry\-recognized guidelines. |
| 9\.5 | The Service Provider shall perform media sanitization and disposal in accordance with industry\-recognized guidelines. |

 

### 

### 10\.  IT Security Team

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 10\.1 | The Service Provider shall have suitably qualified personnel to function as IT security subject matter experts and to manage the security operations for the System. |
| 10\.3 | The Service Provider shall provide the Lazada Representative with the contact numbers of the ITSM and ITSO. The ITSM and ITSO shall be contactable twenty\-four (24\) hours a day, seven (7\) days a week, inclusive of Saturdays, Sundays and Public Holidays. |

### 

### 

### 11\.  Security Training And Awareness

 

| **Clause** **No.** | **Requirement Description** |
| --- | --- |
| 11\.1 | The Service Provider shall ensure that all its personnel and the personnel of any Sub\-Service Provider or third\-party suppliers assigned to manage the System undergo yearly training (at the minimum) on the following but not limited to:  (a) IT security threats and protection; (b) Security awareness; (c) Phishing or other cybersecurity attacks; (d) Data security and data privacy; (e) Security policies, processes and procedures required for their work; (f) Lazada’s data and information handling requirements; and (g) Processes for reporting issues that may lead to an IT security incident. The Service Provider shall periodically review the content of its security training to ensure that it remains current and relevant. The review should take into consideration changes in its and/or Lazada’s IT security requirements, prevalent and emerging risks, current legal obligations under applicable data protection, privacy and cybsersecurity laws and the evolving cyber threat landscape. |
| 11\.2 | The Service Provider shall conduct training for all its personnel (including staff of any Sub\-Service Provider or third\-party suppliers) pursuant to Clause 11\.1, and maintain records of completion and provide to Lazada Representative when requested. The Service Provider shall periodically review the content of its security training to ensure that it remains current and relevant. |
| 11\.3 | The Service Provider shall ensure that its existing staff (including staff of any Sub\-Service Provider or third\-party suppliers) are informed of any content changes to security policies, processes and procedures relating to the System as soon as practicable. |
| 11\.5 | The Service Provider shall ensure that all its personnel (including personnel of any Sub\-Service Provider or third\-party suppliers) are aware of their security responsibilities, accountability and liability when carrying out their respective duties. |

## 

## 

## 12\.  Indepenent Security Assessments

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 12\.1 | The Service Provider shall, at no additional cost to Lazada, engage an independent security assessor (i.e. not affiliated with or related in any manner to the Service Provider) to perform the Pre\-Commissioning Security Assessment (“PCSA”). Subsequent security assessments have to be performed at least once every 12 months, or whenever the system undergoes major changes or updates. All security assessments, including the PCSA, shall be performed in accordance with industry standards. |
| 12\.2 | Upon request by the Lazada Representative, the Service Provider shall provide any industry\-recognized certifications and accreditations held by the independent security assessor’s organization and their personnel conducting the IT penetration testing. |
| 12\.3 | The Service Provider shall implement vulnerability management program and ensure that all security risks and findings identified, managed and documented from the activities as specified in Clause 12\.1 in a timely manner and records shall be provided to the Lazada Representative when requested. |
| 12\.4 | The Service Provider shall address and remediate all security risks and findings identified in the Security Assessment in accordance with the timeframe as specified in the requirements as below, unless otherwise instructed by the Lazada Representative. \-        For PCSA:  o   Critical / High: All findings to be patched before system commissioning \-        For subsequent Security Assessments: All vulnerabilities should be fixed as per the timelines in accordance with the Service Provider’s vulnerability management program referred to in Clause 12\.3\. |

 

 

**13\.  IT Security Incident Management**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 13\.1 | The Service Provider shall implement \& adhere to the IT security incident handling framework and IT security incident handling technical standard operating procedures (“IT Security Incident Handling Technical SOP”) that specify the detailed procedures of handling different types of IT security incidents as per industry standards. The IT Security Incident Handling Technical SOP shall minimally include malware activity, inappropriate usage or unauthorised access, unauthorised disclosure of sensitive data (including personal data), web defacement, suspicious network activities, Distributed Denial\-of\-Service (“DDoS”) and network scanning and reconnaissance, and shall be submitted to Lazada prior to the commissioning date and/or upon request. The Service Provider shall incorporate such changes required by the Lazada Representative into the IT Security Incident Handling Technical SOP. |
| 13\.2 | The Service Provider shall carry out and complete a first review of the IT Security Incident Handling Technical SOP within 12 months after the commissioning date and/or upon request. Thereafter, the Service Provider shall review the IT Security Incident Handling Technical SOP minimally on an annual basis or as required by the Lazada Representative. All changes to the IT Security Incident Handling Technical SOP shall be subjected to the Lazada Representative. |
| 13\.3 | In the event of any IT security incidents, the Service Provider shall: (a) Investigate, resolve and recover from the IT security incident; and  (b) Retain all information related to the IT security incident in an incident report and incident record for the duration of the System. |
| 13\.4 | The Service Provider shall assign suitably qualified personnel as the primary point of contact for all IT security incidents related to the System. |
| 13\.5 | The ITSO shall take all necessary actions to ensure that all IT security incident are handled and managed in accordance with the IT security incident handling framework and the approved IT Security Incident Handling Technical SOP. The Service Provider shall also implement measures to prevent the occurrence of IT security incidents. The Service Provider shall support the Lazada Representative and Lazada\-appointed suppliers in resolving IT security incidents. |
| 13\.6 | The Service Provider shall ensure that the ITSO and the requisite resources are available to carry out immediate investigation and implement workaround solutions in the event of an IT security incident. |
| 13\.7 | Responding, Initial Diagnosis and Escalation: The ITSO shall inform the parties listed in the IT Security Incident Handling Technical SOP within the expected response timeline specified by Lazada. |
| 13\.8 | Responding, Initial Diagnosis and Escalation: The information to be provided shall include the incident reference number, description, date and time, and the impact (including the affected parties) of the incident. |
| 13\.9 | Investigation, Diagnosis and Resolution: The ITSO shall resolve the IT security incident or implement a workaround within the expected resolution timeline specified by Lazada. |
| 13\.10 | Resolution for preventing recurrence incidents: For cases where workarounds are implemented, the ITSO shall identify the root causes and implement permanent resolutions. |
| 13\.11 | Closure: The IT security incident record or report shall be closed only with the Lazada Representative’s approval. The Lazada Representative shall have the right to verify the details in the incident record or report and the Service Provider shall cooperate to facilitate such verifications. |
| 13\.12 | IT security incident response exercises: After the System has been commissioned, the Service Provider shall conduct internal IT security incident response exercises at least once a year to ascertain its ability to manage and handle IT security incidents. The Service Provider shall submit an annual plan that details the incident response exercises that will be conducted for that particular year. The Service Provider shall present its incident response exercise findings and improvement plan after each exercise to the Lazada Representative. |
| 13\.13 | The Lazada Representative may conduct IT security incident response exercises from time to time. These exercises can include testing the Service Provider’s readiness to deploy emergency security patches to the System. The Service Provider shall provision and commit the necessary resources and personnel to participate in the IT security incident response exercises. |

### 

### 

### 14\.  Personal Computer, Email \& Storage Device Security Controls

### 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 14\.1 | The Service Provider shall ensure that all approved endpoints used by the Service Provider for the provision of the System are not used for other purposes or projects unless otherwise specified in the Terms of Use or in any other written agreement between Lazada and the Service Provider in relation to the System. |
| 14\.2 | The Service Provider shall manage the approved endpoints in accordance with the requirements as specified in Clause 9\. |
| 14\.3 | The Service Provider shall update all approved endpoints with relevant security updates, patches, configurations and anti\-malware signatures to prevent any security vulnerabilities from being exploited. |
| 14\.4 | The Service Provider shall ensure there are adequate controls to protect against malware in email, spoofed emails or spam emails in all email communications with Lazada. |
| 14\.5 | The Service Provider shall ensure access to their email accounts are using strong authentication and industry recognised strong encryption. |
| 14\.6 | Lazada shall have the rights to stipulate and enforce additional control measures for approved endpoints, email and removable storage media without notice to the Service Provider. The Service Provider shall fully comply with all control measures issued by Lazada at all times. In the event of security breaches, security violations, or malware infections on approved endpoints and removable storage media, the Service Provider shall notify the Lazada Representative immediately without delay. |

### 

### 

### **15\.  Applicaiton And API Security**

 

| **Clause No.** | **Requirement Description** |
| --- | --- |
| 15\.1 | Where API is present, the Service Provider shall ensure their Application Programming Interfaces (APIs) are not vulnerable to the latest version of OWASP API Security Top 10 Risks. |
| 15\.2 | Where programming or API is required, the Service Provider shall ensure all applications and APIs are compliant with the latest version of these Security Measures. |
| 15\.3 | The Service Provider shall be able to comply with role\-based authentication for the use/reuse of API for multiple services. Users should be able to access only allowed resources/procedures/methods in the API complying with “need to know” principle. |

 

 

 

#

---

## Lazada Partner Application Security Guidelines

<a id="lazada-partner-application-security-guidelines-118115"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26148&docId=118115&lang=en_US>

# Chapter I Purpose and scope

 

## 1\.1\. Purpose

 

In order to create a standardized, orderly and secure Lazada open platform environment, enhance the application security provided by Lazada open platform partners (hereinafter referred to as “developers” or “you”), thereby protecting the legitimate rights and interests of developers and users. This specification is specially formulated for Lazada Open Platform Partners and Users to implement adequate level of security measures when integrate their services with Lazada Open Platform.

 

## 1\.2\. Scope of application

 

This specification specifies the security guidelines for the development, deployment, operation, maintenance, and management of applications provided by developers, and is applicable to all developers and operators of related applications.

 

# Chapter II Terms and Definitions

 

| the term | definition |
| --- | --- |
| E\-commerce | Business activities in electronic form. It enables the sharing of standardized, unstructured or structured business information between suppliers, consumers, government agencies, and other business partners through any electronic means to manage and execute transactions in commercial, administrative, and consumer activities. |
| LazOps | Lazada Open Platform, referred to as “LazOps” or “open platform”, refers to the opening of various e\-commerce services based on Lazada platform. Some software and supporting materials are provided by Lazada. Developers develop applications through these software and supporting materials to serve themselves or Serve other users of Lazada platform. Developers can invoke specified functional services through the open platform application programming interface, access user\-related data provided by Lazada or user authorization, and/or data information from other Lazada applications, or be provided to Lazada by the developer application. Reflow data. Open platforms may include, but are not limited to, one or more APIs, programming tools, and documentation. |
| Developer | Refers to Lazada members who can apply for and develop applications based on open platforms through effective application and verification. Developers in open platforms can also be called “Lazada Partners”or "Independent Software Vendors (ISV)". |
| Application | Refers to software or services developed by developers based on open platforms, including both self\-use and other applications. |
| App key \& App secret | Refers to the application access account and key granted by Lazada from the developer when applying to develop a new application. The App key is the unique identifier of the application. Lazada uses the App key to identify the identity of the application developer. App secret is the key assigned by Lazada to the application. The key can guarantee the reliability of the application source under certain technical conditions. |
| Information security | Protecting and maintaining the confidentiality, integrity and availability of information can also include the nature of authenticity, verifiability, non\-repudiation, reliability and so on. |
| Security strategy | A set of rules, guidelines, and practices for managing the security, integrity, and distribution of assets (including sensitive information) within an organization and its systems, especially those that have an impact on system security and related elements. |
| User | The organization or natural person who uses the application provided by the Taobao partner is based on the registered ID and user information. |
| Merchant | A legal person, legal entity, other organization or natural person appointed by a legal person or legal person who rents an e\-commerce platform for business activities. |
| Online transaction | A trade in goods or services that occurs between companies (or other organizations), between businesses (or other organizations) and consumers, and between consumers through online means. |
| Secondary verification | When the user performs some important or sensitive business operations after registering or logging in, the second verification is performed on the user by using a verification code, a short message, a security question, a digital certificate, and the like in addition to the password. |
| Encryption | Encryption is the process of processing a plaintext file or data into an unreadable piece of code (often called "ciphertext"). |
| Security incident | Specifically, it refers to e\-commerce security incidents, including not only security incidents caused by attacks or intrusions on the network, but also malicious acts such as fraud, hacking, and ban on e\-commerce applications. |
| Sensitive data | Sensitive business data include:- Product information, such as price, stock, and promotion details. - Order and order item details - Customer name and contact information - Financial and transaction statements |
| Information security risk | The threat of man\-made or natural threats to the use of information systems and their management systems leads to the occurrence of security incidents and their impact on the organization. |
| OMS | Order Management System (OMS) is a part of the logistics management system. It manages and tracks the orders placed by customers, dynamically grasps the progress and completion of orders, and improves the efficiency of operations in the logistics process, thus saving operating time. And operating costs to improve the market competitiveness of logistics companies. |
| WMS | Warehouse Management System (WMS) is a function of warehousing, outbound, warehouse transfer, inventory transfer and virtual warehouse management. It integrates batch management, material correspondence, inventory counting, quality inspection management, and virtual warehouse management. Management system that integrates functions such as management and real\-time inventory management, effectively controls and tracks the whole process of logistics and cost management of warehouse business, and realizes perfect enterprise warehouse information management. |
| WAF | Web Application Firewall (WAF), the WAF mentioned in this article refers specifically to a security service provided by Cloud Shield, which provides WEB security protection services for cloud hosts, which can effectively prevent hackers from exploiting application vulnerabilities. . |
| Webshell | Webshell is often referred to as an anonymous user (intruder) who has some degree of access to the WEB server through the WEB service port. Since it is mostly in the form of web scripts, some people call it a backdoor tool. |
| DataMoat | DataMoat is the dedicated data security solution for open platform.  DataMoat provides following main services to ISV including data protection, data risk detection, and security review collaboration. It provides DataMoat APIs for ISV app to integrate with, in order to achieve account protection. |
| UEBA | UEBA Device Fingerprinting verification is an automated process in DataMoat. The purpose of Device Fingerprint is to generate a unique identifier of the device that accesses sensitive data for logging purposes. |

 

 

# Chapter III Overview

 

Applications developed by developers provide support and services to merchants on e\-commerce platforms and must have the ability to ensure data security in their participation in e\-commerce activities. The security requirements imposed by the specification on the application developed by the developer include, but are not limited to, the security setup of hosting environment and the configuration of network protection function, the development of the security function of the application, the security risk notification used by the user, and the security management of the developer's operation.

 

 

# Chapter IV Security Technology Configuration of Application , Network \& Infrastructure

 

## 4\.1 Enable LazOps Security Function

 

This section is a security requirement for the technical configuration of the LazOps infrastructure that the developer application depends on, including: the built\-in security of the LazOps security function, the security configuration of the host resources on which the application depends. Security configuration when applying related access.

 

### 4\.1\.1 Security Architecture Requirements

 

This section is a security requirement for the technical configuration provided by LazOps and DataMoat platform to detect common attacks on the authentication system such as brute force attack and account enumeration. 

| **Security Item** | **Specific Requirements** |
| --- | --- |
| IP Whitelisting | For the APPKEY IP whitelist, the application administrator should set the IP access source range of the application calling Lazada Open API in the LazOps platform, and should bind the host external network IP and not bind the IP network segment;   To do this, please login to LazOP platform (<https://open.lazada.com/>[)](https://uac.lazada.com/login)) \> click on "APP Console" \> click the "Manage" link under each app \> Click "IP Whitelist" at the left menu \> then add the Server Public IP address that allowed to call the API. |
| UEBA | All application must implement the UEBA in their application , please refer [Security Centre](https://open.lazada.com/apps/doc/doc?nodeId=26160&docId=118072) for implementation steps. UEBA Device Fingerprinting verification is an automated process in DataMoat. The purpose of Device Fingerprint is to generate a unique identifier of the device that accesses sensitive data for logging purposes. The output of the Device Fingerprint step is the \_ativalue which uniquely identifies the browser or the client\-side machine that will be associated to the logs collected during Account Risk Control stage. |
| Account Risk Control | The application should be connected to Lazada DataMoat's account risk control, so that it has the security ability to protect and manage the platform account, and can timely identify the abnormal risks of the account (including but not limited to account theft, brute force, etc.), and Give timely control. Please refer [Security Centre](https://open.lazada.com/apps/doc/doc?nodeId=26161&docId=118073) for implementation steps |
| Application Architecture | The application design should implement three\-tier architecture and end user should never interact with database directly for data process.  The 3 tiers including follows: 1. **Presentation Tier**: Displays information either on web page or a client\-side application. This tier should never store sensitive data such as app credential or customer personal information. 2. **Application Tier**: Controls application functionality by performing business logic or data process. It prepares information to be presented on presentation tier. Data encryption/decryption is recommended to be implemented at this tier. 3. **Data Tier:** Houses database servers where information is stored and retrieved. Data in this tier is kept independent of application servers or business logic. Data Tier should never be exposed to the internet for public access.    Here are some examples of application fullfill 3\-tier architecture:1. Web Portal with implementation of web sever/component, app server/component and data management component/database. 2. Client side application (e.g. windows app) with back\-end app services and centralized database server. 3. Automated back\-end script retrieving data form Lazada API and stores the data into existing OMS/ERP/CRM application centralized database. The existing OMS/ERP/CRM is in scope of security review and it should follows 3 tier architecture as described in above examples 1 and 2\.    Following types of application is not allowed to access unmasked data:1. Standalone client\-side application: the client side application invokes LazOP API directly and all data are retrieved to the client app directly.  Encryption key and app secret are stored in the client\-side app directly. 2. Scripts that retrieves LazOp API data with no user authentication. |
|  |  |

### 4\.1\.2 Network , Host and Server Security Configurations

| **Security item** | **Specific requirements** |
| --- | --- |
| Virus \& Malware Defenses | Utilize centrally managed anti\-virus \& anti\-malware software to continuously monitor and defend each of the organization’s workstations and servers. |
| Port , Protocols \& Services | Ensure that only network ports, protocols, and services listening on a system with validated business needs are running on each system. |
| Protect Information through Access Control Lists | Protect all information stored on systems with file system, network share, claims, application, or database specific access control lists. These controls will enforce the principle that only authorized individuals should have access to the information based on their need to access the information as a part of their responsibilities. |
| Host Based Firewall \& Port Filtering | Apply host\-based firewalls or port filtering tools on end systems, with a default\-deny rule that drops all traffic except those services and ports that are explicitly allowed. |
| Implement Application Firewalls | Place application firewalls in front of any critical servers to verify and validate the traffic going to the server. Any unauthorized traffic should be blocked and logged. |
| Network Security Configurations | Maintain standard, documented security configuration standards for all authorized network devices.    All configuration rules that allow traffic to flow through network devices should be documented in a configuration management system with a specific business reason for each rule, a specific individual’s name responsible for that business need, and an expected duration of the need.   Install the latest stable version of any security\- related updates on all network devices. |
| Network access control | a) An organization's internal network domains and external network domains should be seperated and protected by a defined security perimeter such as firewall or virtual private networks. b) Segregation of networks should be based on the value and classification of information stored or processed in the network, levels of trust, or lines of business, e.g. production, staging and QA environment should be segregated and the interaction should be controlled by network access control. |

 

# Chapter V Application Security Function Development

 

This section is a security requirement for the security functions that developers should develop and implement, including account management, identity authentication, rights management, and security auditing.

 

## 5\.1 Account, Authentication and Permissions

| **Security item** | **Specific requirements** |
| --- | --- |
| Login control | The application should identify and authenticate users who log in to the application. |
| Unique Account | The application should assign different accounts to different users, ensure that one user has one account, and should prohibit multiple people from using the same account. |
| Multi\-store binding | If the application involves accessing/managing multiple Lazada stores (multi\-store binding), the application should verify the user's real right to manage the store during the process of binding the user to the associated store. The verification should pass the “Multifactor Authentication” method. |
| Account lockout | The app should limit repeated access attempts by locking the user account after six login attempts; the lock lasts for at least 30 minutes, or until the administrator activates the user account. |
| Inactive account deletion | The application should delete or prohibit redundant and expired user accounts in time to avoid the possibilities  of shared accounts. |
| Account permission recovery | The application should promptly clean up and recycle application\-related development accounts, test accounts, and background management accounts and permissions, such as when the relevant account user leaves or shifts to the post. |
| Initial password | The initial password of the application administrator account shall be the password randomly generated by the system to meet the password strength requirement. |
| Change password | The application should periodically remind the user to modify the password on a regular basis (every 90 days). It is recommended that the password must changed at least every 90 days |
| Password strength | The password strength should meet the following requirements: a) The application should keep the password history in encrypted form and require that the new password be different from the password used in the last four times; b) The password cannot be empty; c) The default password is not allowed; d) The password is at least 8 digits in length ; e) Contains three or more of uppercase letters, lowercase letters, numbers, and special characters. You cannot use consecutive letters or simple numbers. You cannot use consecutive characters on the keyboard. f) Words that are strongly associated with the user (such as birthday, name) cannot be used. |
| Password reset | The application should provide the user with a password reset function. The password reset function should ask users to provide existing password or security question \& answers set by user during registration process, and the reset password link must be sent to the user by side channel (such as SMS or mail ) |
| Re\-verification | When the session is idle for more than 30 minutes, the app should require the user to re\-authenticate or reactivate the session. |
| Multifactor authentication | a) The application should support the identification of two or more combinations of the same user (password verification, mailbox verification, SMS verification, etc.) to achieve user identity authentication; b) In the case of performing sensitive operations (password modification or reset) or sensitive account behavior, the application shall use two or more combined authentication methods. **Description:** SMS and email authentication can be sent to the trusted mobile phone number or mailbox bound by the user, and the expiration time needs to be set for the authentication information. It is recommended to be 10 minutes. |

## 

## 5\.2 Log Auditing

| **Security item** | **Specific requirements** |
| --- | --- |
| Audit all user behaviors and actions | The application should provide a security audit function that covers each user and audit important security events. The audit content should include important user behavior (including: all login access, database calls, LazOps calls, access to the client and orders). |
| Log storage protection | The application should protect the integrity of the stored log audit records from unintended deletions, modifications, or overrides. |
| Log retention period | The app should save the log for at least six months. |
| Client device fingerprinting | The application should record and report the logs from the client by integrate with the Device Fingerprint feature in DataMoat. |
| Application login log | a) The application should record and report all login logs of the application by calling the DataMoat Login API and ComputeRisk API , including but not limited to:    1\) The log of the user login application;    2\) The application administrator logs in to log in to the background login log;    3\) System login by the host. b) The contents of the log should include: time, user's own account in the developer, user's Lazada account, application identification ( App Key ), application name, source IP and login result (success or failure), etc. Please refer [Security Center](https://open.lazada.com/apps/doc/doc?nodeId=26200&docId=118115) for more details |

## 5\.3 Data Protection

### 5\.3\.1 Data Access

| **Security item** | **Specific requirements** |
| --- | --- |
| Access | Prohibit applications from initiating LazOps API data requests from servers outside the Application Associated with the Appkey, including but not limited to ERP/ invoicing software, developer back\-end systems, merchant back\-end systems, customer relationship management, promotion management, orders Management, order payment, merchandise management, warehouse management system, online ordering application, collaborative office, express delivery application, e\-commerce finance, omni\-channel ERP , industry / store analysis, customer service. |

### 5\.3\.2 Data At Rest

| **Security item** | **Specific requirements** |
| --- | --- |
| Password storage | The application should encrypt and store the user's password using a secure hashing algorithm with random salt to prevent privileged users from obtaining the user's password, e.g. Argon2, PBKDF2, bcrypt or scrypt . You can refer [OWASP cheat sheet](https://open.lazada.com/apps/doc/doc?nodeId=26200&docId=118115) for additional reference |
| Access token storage | The Access Token (authorization token, which is the original Session Key) for which the user data is accessed should be encrypted. |
| Sensitive data storage | Sensitive data storage should fulfill following requirements:1. Sensitive data should not be stored in client side and protected by access control. 2. Sensitive data should be encrypted when stored into database with strong encryption algorithm in secured mode. (e.g. AES with at lease 128 bits key length and in GCM mode) 3. Secret key should be protected in key vault which iis away from encrypted data. Secret key should not be stored on client side. |
| Data backup \& recovery | a.)Ensure that all system data is automatically backed up on a regular basis.   b.) Ensure that all of the organization’s key systems are backed up as a complete system, through processes such as imaging, to enable the quick recovery of an entire system. |

### 5\.3\.3 Data In Transit

| **Security item** | **Specific requirements** |
| --- | --- |
| Transport layer protection | a) The transmission of sensitive data (such as order data, etc.) in the application must be encrypted and transmitted to achieve the confidentiality of transmission of system management data, authentication credentials and important business data i.e. TLS/SSL b) Only support strong protocol TLS 1\.2 or above with strong cryptographic cipher suites.  c) Transport layer protection should be implemented in internal network application and back end server\-to\-serer communication as well.   You can refer [OWASP cheat sheet](https://open.lazada.com/apps/doc/doc?nodeId=26200&docId=118115) for additional reference |

### 6\.3\.4 Data In Processing

| **Security item** | **Specific requirements** |
| --- | --- |
| Data processing | When the application processes or calculates its sensitive data (such as order data, etc.), the components and modules of its related functions should be at server side. |
| Data Masking | Applications should be desensitized (fuzzy, anonymized, etc.) for presentations involving sensitive data (such as phone numbers, emails, Lazada nicknames, etc.). Recommended desensitization program: a) \[Mobile phone number] displays 4 digits after \*\+. Such as: \*\*\*\*\*\*1050; b) \[Fixed number] displays the area code and the last three digits, such as 0571\-\*\*\*\*\*123; c) \[Mailbox] If the character preceding @ is greater than or equal to 3 characters, the character preceding @ will only display the first 3 digits and add 2 more \*, and @ will display its first character, '.' separator and The characters after it, but the other characters in it are uniformly replaced with 2\*, for example: con\*\*@1\*\*.com; if there are less than three digits, the characters before @ are all displayed and 2 more\* are added, and @The following shows the first character, the '.' separator and the characters after it, but the other characters are replaced by 2\*, for example, tt@163\.com is displayed as tt\*\*@1\*\*. Com; d) \[Lazada nickname] display 1 position for the first/tail, plus \* in the middle: for example: a\*1; e) \[Receipt address] The address of the hidden area/below county level. |

# Chapter VI Security Management Requirements for  Operations

This section is a security requirement for developers to implement security management in the development and operation of developer applications, including: security management of the application development process, related security vulnerability management, and security in daily operation and maintenance.

## 

## 6\.1 Vulnerability Management

| **Security item** | **Specific requirements** |
| --- | --- |
| Vulnerability scanning | Before the application goes online, the developer should perform an authenticated vulnerability scan on the front and back system to ensure that there is no vulnerability in the online application and submit the scan result to Lazada. |
| Vulnerability fix | Developers should track and manage vulnerabilities, requiring risk vulnerabilities to be fixed in adequate time |
| Penetration test | Developer conduct regular external and internal penetration tests to identify vulnerabilities and attack vectors that can be used to exploit enterprise systems successfully.   The application should be reviewed for security testing/penetration testing through the Lazada Open Platform. The application must ensure that it is free from OWASP Top 10 vulnerabilites including, but not limited to:   1\.     Injection attacks like SQLi, Command injection 2\.     Information Leakage 3\.     Remote code execution 4\.     File upload vulnerbailities 5\.     Access control vulnerbailities (Insecure Direct Object Reference) 6\.     Cross site scripting (Reflected, Stored, DOM) 7\.     CSRF 8\.     URL redirection 9\.     Using vulnerable components     The developer may also provide the penetration testing report to Lazada security team but test is conducted independently by an independent third party testers.    Developer should perform security testing on applications handling Lazada customer data from time to time in the event of major environmental changes (such as acquisitions, mergers, relocations, etc.), and perform appropriate actions based on security testing results (eg, patch management, Software upgrade, system reinforcement, etc.), |
| Vulnerability information disclosure | a) Developers should notify Lazada in time when they find that there is a defect in the LazOP. Under no circumstances should it be concealed or maliciously used; b) Developers should promptly notify Lazada when there are security vulnerabilities in self\-developed applications, operating systems, and related third\-party applications/code components used. Under no circumstances should you attempt to verify weaknesses in a production environment. |

## 6\.2 Operation and maintenance security

| Security item | Specific requirements |
| --- | --- |
| Information Security Point of Contact | Developers should provide the contact details of full time information security personnel (development, testing, operation and maintenance, management, etc.) to Lazada and maintain secure contact and communication on a regular basis. |
| Change management | a) Developers should identify key change requirements in application development and operations and develop relevant change plans; b) Developers should establish relevant change processes and approval mechanisms; c) When the relevant system changes, the developer shall notify all relevant personnel (development, testing, operation and maintenance, management, etc.); when the change is implemented, it must be recorded and the records should be properly kept. |
| Incident Response | a) The developer ensure that there are written incident response plans that define roles of personnel as well as phases of incident handling/management. b) The developer shall establish a team responsible for the online incident response, clarifying the role of the security incident response and the responsible personnel / organization and any security incident should report to Lazada through Lazada Open Platform tickets d) Developers should monitor security vulnerabilities and threat intelligence of related software programs and timely fix security vulnerabilities in applications and related support systems; e)  Developers should document and maintain security vulnerabilities and suspicious events in all reports, analyze the cause of the incident, monitor developments, and take steps to avoid security incidents; |

 

# Chapter VII User Security Guidance

This section is a security requirement for the developer to apply and pay attention to the relevant security risks in the process of being used, including: through the user manual and system prompts to inform users how to effectively use the application's security features, and the bad user behavior that users should pay attention to and avoid.

## 7\.1 User Manual

| Security item | Specific requirements |
| --- | --- |
| Introduction to security functions | For seller users of the app, developers should provide detailed and comprehensive operational guidance documents (such as help files and paper documents) that are easy for users to query and guide users to use or configure the security features of the app provided by the developer. Should be written in the document security features provided in applications introduced for the user affect the operating system security (such as changing passwords, configure permissions, etc.), it should be clearly prompted the risks associated with the operation; to affect the normal operation of the application Key configuration items and actions, as well as warning signs are applied to the documentation and indicate their possible impact. |
| Data interaction between applications | a) The developer should inform the user to protect the password, including: verifying the password strength and prompting the user to set a strong password, setting the password to modify the default period, expiring the prompt to change the password, and the password must not be stored locally; b) The developer should inform the user of the insecure daily use behavior and basic security recommendations for the safe use of the terminal: including: screen security security settings, timely upgrade of the operating system, effective installation of anti\-virus software, and proper configuration of the host firewall , application software download and installation; c) The developer should inform the user of the safe use of the mobile terminal, including: setting the screen unlock password or pattern, effective installation of anti\-virus software, etc.; d) Developers should inform users of the security management of removable storage  including: thumb drive, external hard should be securely stored \& access to the storage should be password protected, etc. e) Developers should inform users of the safe access to the Internet, including: wireless Internet access, Internet access, email, social networking, instant messaging, online transactions, etc. f) Developers should inform users to prevent social engineering\-based fraud, including:- Based on people: physical unauthorized access; - Based on the phone: the deception of the caller's phone; - Based on email: phishing attacks, email address spoofing; - Based on instant messaging software: spoofing through WhatsApp, Messenger, etc. |
|  |  |

## 7\.2 Security Awareness Training

| Security item | Specific requirements |
| --- | --- |
| Security Awareness Training | a.)Create a security awareness program for all workforce members to complete on a regular basis to ensure they understand and exhibit the necessary behaviors and skills to help ensure the security of the organization. The organization’s security awareness program should be communicated in a continuous and engaging manner.   b.) Developers security lead must attend the LazOps security awareness program once in a year. |
| Secure Coding Training | Ensure that all software development personnel receive training in writing secure code for their specific development environment and responsibilities. |

---

## Reverse API System Signature

<a id="reverse-api-system-signature-121791"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26148&docId=121791&lang=en_US>

# 一、Signature Param:

The parameter corresponding to the signature is **http\_sign.** You can obtain the system\-generated signature by retrieving the value of parameter **http\_sign**.

  

# 二、How to get http\_sign param

The http\_sign parameter is placed on the request URL, not in the request body. For example：https://api.taobao.global/test/push?app\_key\=103602\&http\_sign\=124AEFA4A55F0B84D1E98DB302AA2F94F13348CD7EC36A7DC0A7FC62D545B3DC\&sign\_method\=sha256\&timestamp\=1729589993688

  

# 三、Signature Algorithm

  

Using Java code as an example：

  

Input Parameter Explanation

1. **params**：All HTTP input parameters, including parameters in the URL and parameters in the body. Attention：In addition to the business parameters, there are three system parameters，namely app\_key, sign\_method, and timestamp.
2. **uri**： api path, You can view the API path on the API documentation.
3. **body**: Fixed value null
4. **appSecret**： app secret

PlainBashC\+\+C\#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL /\*\* \* Sign the API request with body. \*/ public static String signApiRequest(Map\<String, String\> params, String uri, String body, String appSecret) throws IOException { // first: sort all text parameters String\[] keys \= params.keySet().toArray(new String\[0]); Arrays.sort(keys);  
 // second: connect all text parameters with key and value StringBuilder query \= new StringBuilder(); query.append(uri);  
 for (String key : keys) { String value \= params.get(key); if (areNotEmpty(key, value)) { query.append(key).append(value); } } // third：put the body to the end if (body !\= null) { query.append(body); }  
 // next : sign the whole request byte\[] bytes \= encryptHMACSHA256(query.toString(), appSecret); // finally : transfer sign result from binary to upper hex string String s \= byte2hex(bytes);  
 return s; }  
 private static byte\[] encryptHMACSHA256(String data, String secret) throws IOException { byte\[] bytes \= null; try { SecretKey secretKey \= new SecretKeySpec(secret.getBytes(ApiConstants.CHARSET\_UTF\_8\), "HmacSHA256"); Mac mac \= Mac.getInstance(secretKey.getAlgorithm()); mac.init(secretKey); bytes \= mac.doFinal(data.getBytes(ApiConstants.CHARSET\_UTF\_8\)); } catch (GeneralSecurityException gse) { throw new IOException(gse.toString()); } return bytes; }  
 /\*\* \* Transfer binary array to HEX string. \*/ public static String byte2hex(byte\[] bytes) { StringBuilder sign \= new StringBuilder(); for (int i \= 0; i \< bytes.length; i\+\+) { String hex \= Integer.toHexString(bytes\[i] \& 0xFF); if (hex.length() \=\= 1) { sign.append("0"); } sign.append(hex.toUpperCase()); } return sign.toString(); }  
  

  

# 四、Example

1. api path: /wl/test
2. input parameters: ![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_param_demo_1729597071773__ZJaY.jpg)
3. Parameter example of parameter signature
4. ![](https://lazada-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_sign_example_1729597543022__Djn5.jpg)

---

## Step 1 Provide App Information

<a id="step-1-provide-app-information-118065"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26149&docId=118065&lang=en_US>

Once you are in the **DataMoat** Console, please fill in and submit all the information about your application architecture.

- Please ensure your application is using https over public network for user access.
- Please ensure your application as independent app level user access control to ensure only authenticated and authorized user can access to the application function.
- Please refer to [Data Flow Diagram](https://open.lazada.com/apps/doc/doc?nodeId=11232&docId=108521) document if you are not sure what to upload.

- Do not copy any data flow diagram online or from the documentation (you application will be rejected immediately).
- Ensure the Data flow diagram clearly shows how the sensitive data is handled in your environment when data is in transit, in use, and at rest.

If you have any additional questions to clarify when you fill in the the step 1 form, please leave the question in the 1st textbox in the form and click "submit" button. We will provide feedback and review your answers once the step 1 form is submitted. 

![](https://img.alicdn.com/top/i1/LB1qIKkJoY1gK0jSZFMXXaWcVXa)

---

## Security Review Process Overview

<a id="security-review-process-overview-118077"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26149&docId=118077&lang=en_US>

# **How to Apply for Data Unmask**

Login to https://open.lazada.com/ \> APP Console \> Click **Manage**  \> App Overview \> **Apply Unmask**

![](https://tida.alicdn.com/oss_1659343273521_null_LupJvOu4)

A message will be pop up to prepare you with the the overall security process information. Please read the information carefully. Please note that any false information provided in the answer will lead to permanent denial of access to customer sensitive data. 

![](https://tida.alicdn.com/oss_1659343413237_null_a27la4W2)

Please acknowledge that you have read through the information and agree to provide accurate app information. The page is then automatically redirected to the DataMoat Console. It is mandatory to complete the Datamoat security review process for requested APPKEY within **2 weeks** after that any request "In Progress" status will be closed by the system and then need to request for the unmask data again from step 1\.

# Security Review Process Steps

 

![](https://tida.alicdn.com/oss_1649829409580_null_8W7efGZl)

---

## Step 2 LazOP Review Application Information

<a id="step-2-lazop-review-application-information-118071"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26149&docId=118071&lang=en_US>

LazOp team will review the submitted application information.The status should now change to **Under Review.**

- If all security requirements are fulfilled,  the request will be moved to step 3 within 1\-5 days. There is **no action** required from ISV side.
- If any of the security requirements is not met, the request will be rejected with rejection feedback. Please review the feedback and make necessary changes to the application before submitting the step 1 form again.

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/190030/1564650612806-e5ba420d-6cff-41c6-b0a5-542ff7a1b556.png "image.png")

---

## Step 3.1 Security Requirements

<a id="step-3-1-security-requirements-118074"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26149&docId=118074&lang=en_US>

The purpose of this step is to ensure the sensitive information is properly protected. There are two types of sensitive data:

1. **For p****assword:** to verify that password is hashed with salt, complexity requirements are imposed, password history is maintained, and password expiration date is set. Please use strong hash algorithm such as SHA2 or slow hash functions such as Argon2, PBKDF2, bcrypt or Scrypt . Please note that MD5 and SHA1 are weak and broke.
2. **For customer sensitive personal information** : sensitive data should be encrypted with at application level before saving into the database. Please use strong encryption algorithm with adequate key length such as AES with at lease 128 bits key length and in GCM mode.

 

![](https://tida.alicdn.com/oss_1649837291664_null_1QOFOwia)

 

 

 

LazOp team will review the submitted information:

- If all security requirements are fulfilled, the request will be moved to step 3\.2 within 1\-5 days.
- If any of the security requirements is not met, the request will be rejected with rejection feedback. Please review the feedback and make necessary changes to the application before submitting the step 3\.1 form again.

---

## Step 3.2 Penetration Test

<a id="step-3-2-penetration-test-118075"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26149&docId=118075&lang=en_US>

Please fill in the PenTest information required:

- We strongly recommend to carry out the penetration test on your staging environment. Please also have your data fully backed up before the test.
- Please use https and make sure the URL is accessible. We will reject applications with invalid test URL.
- Please provide 2 test accounts from different user roles or user group. For example,

- Provide 1 test account from normal user role and 1 test account from admin role.
- Provide 1 test account from seller A and 1 test account form seller B.

- Please read the "Authorization" notice carefully and authorize Lazada carrying out of security testing on the test application URL with the test credentials.
- If your application has been tested within past 3 months by a third party tester, please attach the test report in the form. We will verify the test report if the test scope and methodology fulfills our requirements and pass the Pentest step based on the report.
- Please click **[here](http://downloads-sg.oss-ap-southeast-1.aliyuncs.com/datamoat/Security%20Testing%20Standard.pdf?spm=a2o9m.11193531.0.0.76af6bbeTefQxr&file=Security%20Testing%20Standard.pdf)** for our Penetration Test methodology details.

 

 

![](https://tida.alicdn.com/oss_1649837562295_null_SskPpVGa)

 

## 

## 

## Initial PenTest Scheduling:

- Test is scheduled based on first come first serve basis.
- Initial test will be completed in 1 day to 3 weeks.
- If there is any vulnerability reported, this step will be marked as "Not Pass" with feedback provided in the "Problems and fix suggestions" section.
- Vulnerabilities will be notified by the **Message Center****as well as an email** , and details are listed under **Vulnerability Management** on DataMoat Console. Login to <https://open.lazada.com/> \> APP Console \> DataMoat \> Security Operation \> Vulnerability Management (or click  [here](https://eco.lazada.com/risk/isv/vulnerability) )
- Please read trough the vulnerabilities and recommendation. Once all the vulnerabilities are fixed, please submit the updated test information again. This step will be repeated until **all** the vulnerabilities reported are cleared

 

 

 

![](https://tida.alicdn.com/oss_1649838247491_null_18iZhTpw) 

## 

 

## PenTest Re\-test Scheduling:

- Re\-test typically takes 1\-5 working days for the first 2 rounds of retest.
- From the 3rd rounds of re\-test onward, **1 month additional delay** for re\-test will be added to start retest date.
- Please raise a LazOP ticket under "security testing" category for technical support if you need any help from fixing the vulnerabilities.

---

## Step 4 Under Verification

<a id="step-4-under-verification-118076"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=26149&docId=118076&lang=en_US>

LazOp team will review the security review process at this step. The request will be approved within 1\-2 working days. Not action required from you in this step. 

![Image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/190030/1564739902527-1d7b0490-4b45-4647-98d1-bbe55fada33d.png "Image.png")

---

## Introduction to DataMoat

<a id="introduction-to-datamoat-108070"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10717&docId=108070&lang=en_US>

Based on the massive amounts of basic data and the powerful data analysis capabilities of Alibaba, DataMoat utilizes an industry\-leading risk detection model to provide risk identification and prevention services for merchants, service providers, and logistics partners in the e\-commerce ecosystem. DataMoat conducts real\-time detection and identification of abnormal data access behaviors on devices, accounts, applications and systems, and properly disposes of them to achieve data risk prevention before the event, data risk detection during the event, and data risk tracing after the event, and thus ensures the security of core data.

So far, DataMoat covers 93% of all Taobao transactions and orders. It helps service providers finish 180 million analyses on access behaviors to their core data and intercept risks found every day. In addition, it also helps logistics service providers finish 35 million analyses every day. Nearly 8 million terminals of more than 3 million merchants are currently using protected applications from service providers or logistics service providers. With the support of this big data system, Alibaba has assisted public security departments across the country in handling 24 major cases of information leakage, leading to more than 200 arrests of suspects.

## Data Risk Prevention

Targeting high\-risk data risk points in systems, applications and accounts, DataMoat provides multi\-dimensional risk prevention services in host permission management and control, safe login channels, application protections, account risk control, secondary verifications of identities, data encryption and decryption to achieve data risk prevention before the event.

## Data Risk Identification

Using a standard data access solution, the data from applications or logistics systems, such as from account logins, operational behaviors and system environments, can all be easily and conveniently connected to the Risk\-Control Engine of DataMoat. Integrating massive amounts of basic data and the big data analysis capabilities of Alibaba, DataMoat can help you to analyze the accessed data with a data risk analysis model. You can literally “see” data risks when DataMoat discovers relevant data leakage risks that exist in accounts, personnel and systems in real time.

## Data Risk Early Warning

Early warning reports will be sent to security contacts via multiple channels once data risks are identified.

## Data Risk Disposal

DataMoat provides details of risks found and feedback channels, as well as millisecond\-level auditing tools for massive data, so that you can pinpoint the problems and have risks nipped in the bud.

---

## Access to Sensitive Data

<a id="access-to-sensitive-data-108231"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10717&docId=108231&lang=en_US>

## How to access Sensitive Data  \- unmasking Request

  
You need to go through the following procedure to request access to the sensitive data which are masked. This page describes the steps to unmask the business data which are categorized as sensitive according to the Data Classification Policy. 

 

Security process for unmasking the sensitive data consists of the following steps:

 

1. Application Architecture Information Form 

	- Port requirement
	- Data Flow Diagram
	- Hosting environment
	- Other relevant information
2. DataMoat Integration

	- Security requirements
	- Penetration test
3. Vulnerability assessment
4. Verification

 

**Procedure**

  
**Apply for Unmasking Data**

 

Login to https://open.lazada.com/ \> APP Console \> Click **Manage** under **Action** \> Sensitive Data Privilege \> **Apply Unmask**

- The page is automatically redirected to the Data Registration App.
- It is mandatory to complete the Datamoat security review process for requested APPKEY within **2 weeks** after that any request "In Progress" status will be closed by the system and then need to request for the unmask data again from step 1\.

 

![](https://tida.alicdn.com/oss_1659343620214_null_s0BGi5AT)

  
**Step 1\. Fill in your Application Architecture Information Form**

 

Once you are in the  **DataMoat** Console, please fill in and submit the information about your application architecture.

- Please use https and make sure the URL is accessible, otherwise there is a possibility that your application is rejected.
- Please refer to [Data Flow Diagram](https://open.lazada.com/apps/doc/doc?nodeId=11232&docId=108521) document if you are not sure what to upload

 

![](https://img.alicdn.com/top/i1/LB1Ezt3tuuSBuNjSsziXXbq8pXa) 

 

**Step 2\. Your application is being reviewed (No action required)**

 

The status should now change to **Under Review** . Lazada will review the application form you have submitted in the previous step.

- We are pleased to receive a large amount of interest! However, please expect a delay in our response although we are trying our best to reach out to you as soon as possible. Should you have questions, please raise a ticket to us from **Contact Us** .

 

![](https://img.alicdn.com/top/i1/LB1o9TmXH1YBuNjSszeXXablFXa)

 

**Step 3\. DataMoat Integration**

 

The type of security controls depend on Step 2 review result, however, typically this step consists of : 

- Security Requirements (password)
- Penetration Test

 

 

**Step 3\.1\. Security Requirements**

 

This is the list of our security requirement.

- Please state how your application is complying with each item by clicking **Provide details** under **Requirement Compliance**

 

![](https://tida.alicdn.com/oss_1649834761602_null_UIlUELqo) 

 

 

 

**Step 3\.2\.  Penetration Test** 

 

Please fill in the information required for penetration testing. 

 

- Please use https and make sure the URL is accessible, otherwise there is a possibility that your application is rejected.

- We strongly recommend to carry out the penetration test on your staging environment. Please also have your data fully backed up before the test.

- Once the penetration test is scheduled, an **email and/or ticket notification** will be sent to your registered email address or to the message center on your LAZOP console. Such notification will be sent at least 2 days prior to the test schedule. Should you have any conerns, please reply directly to our email or raise a ticket via **Contact US** under **Security Testing** category.

- Vulnerabilities that are assessed will be notified by the **Message Center** **as well as an email** , and details are listed under **Vulnerability Management**  on DataMoat Console.

Login to   <https://open.lazada.com/>   \> APP Console \> DataMoat \> Security Operation \> Vulnerability Management (or click  [here](https://eco.lazada.com/risk/isv/vulnerability)  )

- Please click **[here](http://downloads-sg.oss-ap-southeast-1.aliyuncs.com/datamoat/Security%20Testing%20Standard.pdf?spm=a2o9m.11193531.0.0.76af6bbeTefQxr&file=Security%20Testing%20Standard.pdf)** for our Penetration Test methodology details.

- This step will be repeated until  **all**  the vulnerabilities assessed are cleared

- Security Test typically takes up to 5 working days from the day Lazada receives adequate information to perform the test

 

 

 

![](https://tida.alicdn.com/oss_1649836229443_null_hhc0bnHL)

 

 

 

 

 

**Step 4\. Final Verification (No action required)**

 

You will be notified once verification is complete via an email or message center on LAZOP console.

 

![](https://img.alicdn.com/top/i1/LB1KoPmXFuWBuNjSszbXXcS7FXa)

 

**Step 5\. Complete**

 

The sensitive data is now unmasked.

 

![](https://img.alicdn.com/top/i1/LB1YlCPtxWYBuNjy1zkXXXGGpXa)

 

**Any Questions?**

 

Please raise a ticket from **Contact Us** under **Security Review** question category.

---

## Data Flow Diagram

<a id="data-flow-diagram-108521"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10717&docId=108521&lang=en_US>

A data flow diagram (DFD) illustrates how data is processed by a system in terms of inputs and outputs. As its name indicates, its focus on the flow of information, where data comes from, where it goes and how it gets stored.

All data flow diagrams include four main elements: entity, process, data store and data flow.

**External Entity** – Also known sources (start point) and terminators (End point). These data flows are the inputs and outputs of the DFD. They can represent another system or indicate a subsystem.

**Process** – An activity that changes or transforms data. Since they transform incoming data to outgoing data, all processes must have inputs and outputs on a DFD.

**Data Store** – A data store does not generate any operations but simply holds data for later access. Data stores could consist of files held long term or a batch of documents stored briefly while they wait to be processed.

**Data Flow** – Movement of data between external entities, processes and data stores is represented with an arrow symbol, which indicates the direction of flow. 

Sample DFD as shown below:

![](https://img.alicdn.com/top/i1/LB1ybr5qxWYBuNjy1zkXXXGGpXa)

 

Please refer below for the description of the DFD:

When an **external entity** triggers the **process,** it will search/look up for the details by flowing to **data store (information store)** and extract the needed data for the external entity view.

**External entity**: Refer to the User

**Process:** Refer to the activity perform which is “Look up product availability”

**Data store:** Refer to the “catalog, product item \& inventory item” box where the data is kept.

 

![](https://img.alicdn.com/top/i1/LB13CLvqAyWBuNjy0FpXXassXXa)

 

**External entity**: Refer to the customer (at the beginning of the flow and end of the flow). This action trigger when Customer make an order. The order details and goods invoice will be flown to Process order box.

**Process:** In “Process order” box, “get order \& goods dispatch” details being process and flown to “data store – Orders (storing information)”

**Data store:** Refer to the “orders” box whereby all the order details are stored in.

OR

 

![](https://img.alicdn.com/top/i1/LB10vJlqTJYBeNjy1zeXXahzVXa)

---

## Security Testing Standard

<a id="security-testing-standard-108573"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10717&docId=108573&lang=en_US>

[Security Testing Standard](http://downloads-sg.oss-ap-southeast-1.aliyuncs.com/datamoat/Security%20Testing%20Standard.pdf "Download")

---

## API Reference

<a id="api-reference-108326"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10720&docId=108326&lang=en_US>

The table below lists APIs are used to access [DataMoat Account Risk Control Service.](https://open.lazada.com/apps/doc/doc?nodeId=10722&docId=108073) .

The DataMoat Account Risk Control Service are required in the process of [Access to Sensitive Data](https://open.lazada.com/apps/doc/doc?nodeId=10719&docId=108231).

Please refer to the [Lazada Open Platform Developers’s Guide](https://open.lazada.com/apps/doc/doc?nodeId=10722&docId=108073#?nodeId=10442&docId=108064) for API calling.

Please use the domain “auth.lazada.com” to invoke the APIs for all the regions

|
|  |
|

---

## order

<a id="order-108077"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=10728&docId=108077&lang=en_US>

Order Access Log

http://eco\-ueba.lazada.com/event/order

With the order access log we can clearly know who acquired what information, through which application, and when. Such logs are very helpful for us in detecting data leaks.

 

| **Parameter** | **Type** | **Necessary** | **Description** |
| --- | --- | --- | --- |
| userId | string | Y | The ID or name of the user who is accessing orders in the ISV account system. The specific user should be able to be located using the incoming parameter. Optional account formats: 1\) Company Name: Sub\-account. 2\) Pass actual login accounts if they are unique in the application’s account system. 3\) Identification Codes for Independent Deployments: Sub\-account. |
| userIp | string | Y | Client IP of this access request. |
| ati | string | Y | For applications with B/S architecture, a cookie \_ati will be generated under the domain name after device fingerprint is accessed. The value of the cookie named \_ati can be acquired from HTTP requests on the server side.  For applications with C/S architecture, the client will generate a symbolic client SID for itself and send it to servers as \_ati when accessing servers after device fingerprint  is accessed. |
| appId | string | Y | The App Key assigned by Lazada Open Platform. |
| appName | string | Y | While for the names of login applications, the app or domain name can be used. |
| url | string | Y | URL of client requests. |
| tradeIds | string | Y | Order number list separated by English semicolons. A maximum of 100 records is allowed each time. It should be split into multiple requests if there are more than 100 records. |
| operation | string | Y | Operations performed on orders. For example, print orders. |
| time | string | Y | It supports two formats: (1\) Integral timestamps that are accurate to the millisecond, and the number of milliseconds since January 1, 1970 12:00 AM. (2\) Strings in yyyy\-MM\-dd HH:mm:ss format. |
| appKey | string | Y | The App Key issued by DataMoat. |
| sign | string | Y | API call signature. |

 

See below for relevant parameter settings for users if there are order reading operations (for example, reading and processing orders by timed tasks) triggered by non\-user requests on servers:

ati： Set it to 0000000000

userId：Set it to “System”

userIp： Set it to server IP

url：Set it to the name of the current processing task. You can also fill in the same value as that of the operation.

---

## 御城河介绍

<a id="109279"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=12292&docId=109279&lang=en_US>

御城河基于阿里海量的基础数据和强大的数据分析能力，利用行业领先的风险检测模型，为电商生态中的商家、服务商、物流伙伴提供数据风险的预防和发现服务，实时检测和识别设备、账号、应用、系统中的异常数据访问行为并进行适当处置，实现数据风险的事前防控、事中检测、事后追溯，保障核心数据安全。御城河已经覆盖了93%淘系交易订单，每天帮助服务商分析6\.5亿次核心数据访问行为并拦截风险，每天帮助物流商分析3500万次。有超过300万商家的近800万终端在使用受保护的服务商或物流应用。在这套大数据系统的支持下，阿里巴巴已协同各地公安办理24个信息泄露大案，共抓捕犯罪嫌疑人200多人。

**数据风险预防**

针对系统、应用、帐号中的高危数据风险点，提供主机权限管控、安全登录通道、应用保护、帐号风控、身份二次验证、数据加解密等多维度的风险预防服务，实现数据风险的事前防控。

**数据风险发现**

使用标准数据接入方案，可轻松便捷将应用或物流系统的账号登陆、操作行为、系统环境等数据接入御城河风控引擎。整合阿里巴巴海量基础数据及大数据分析能力，并通过数据风险分析模型，助力您分析接入的数据。实时发现账号、人员、系统中数据泄露的相关风险，让您“看见”数据风险。

**数据风险预警**

一旦识别数据风险，预警报告将第一时间多渠道触达安全联系人。

**数据风险处置**

提供了风险详情及反馈渠道，同时提供海量数据的毫秒级审计工具，便于您准确定位问题，将风险扼杀在萌芽状态。

---

## 敏感数据去模糊化

<a id="109280"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=12292&docId=109280&lang=en_US>

您需要通过下面的流程来申请敏感数据的访问权限。 此页面描述了根据数据分类策略被归类为敏感的业务数据去模糊化的步骤。

敏感数据去模糊化的安全流程包括以下步骤：

- 提交应用程序架构信息表
	- 端口要求
	- 数据流图
	- 主机环境
	- 其他相关信息
- 集成御城河
	- 安全要求
	- 渗透测试
- 漏洞评估
- 验证

 

**流程**

**申请数据去模糊化**  
登录https://open.lazada.com/\> 应用控制台下的“应用工作台”\>点击“管理”按钮\>应用预览\>敏感数据特权\>申请明文

- 该页面将自动重定向到信息注册的页面。
- 请您在30天内完成敏感信息访问权限审核流程。如果申请单创建超过**2周**仍没有通过审核，系统会自动闭环该申请单，您需要从第一步开始重新申请。

![](https://tida.alicdn.com/oss_1659344256477_null_sNZyo6O8)

 

**步骤1\.填写您的应用架构信息表**

进入御城河控制台后，请填写并提交有关应用架构的信息。

- 请使用https并确保URL可访问，否则您的应用可能会被拒绝。
- 如果您不确定要上传什么，请参阅数据流图文档。

![](https://img.alicdn.com/top/i1/LB12V52wVYqK1RjSZLeXXbXppXa)

**步骤2\. Lazada正在审核您的信息（无需任何操作）**

状态现在应更改为“审核信息”。 Lazada将审核您在上一步中提交的申请表。

- 如果您有任何疑问，可以通过“联系我们”提交工单咨询，我们很乐意接受咨询！我们会尽快与您联系，但因为咨询量较大，回复会有延迟，敬请谅解。

 ![](https://img.alicdn.com/top/i1/LB1nOa8w3HqK1RjSZFkXXX.WFXa)

**步骤3\. 集成御城河**

需要完成的安全改造的类型取决于第2步审核结果，但通常此步骤包括：

- 安全要求（密码）
- 渗透测试

 

**步骤3\.1\.安全要求**

这是我们的安全要求列表。

- 请点击“反馈”下的“提供详情”按钮，说明您的应用是如何遵守每个项目的。![](https://tida.alicdn.com/oss_1649834365279_null_Vtk2O9c6)

 

**步骤3\.2\.渗透测试**

请填写渗透测试所需的信息。

- 请使用https并确保URL可访问，否则您的应用可能会被拒绝。
- 我们强烈建议您在测试环境中进行渗透测试。请在测试前完整备份您的数据。
- 一旦安排了渗透测试，**电子邮件和（或）工单通知**将发送到您注册的电子邮件地址或LAZOP控制台上的消息中心。此类通知将在测试计划之前至少2天发送。如果您有任何问题，请直接回复我们的电子邮件或在“**联系我们**”中提交“**Security Testing**”类别的工单。
- 被发现的漏洞将通过**消息中心及电子邮件**发送通知，漏洞详情可以在御城河控制台的**漏洞管理**中查看。
	- 登录https://open.lazada.com/\> APP控制台\>御城河\>安全运营\>漏洞管理(或点击[这里](https://eco.lazada.com/risk/isv/vulnerability))。
- 请点击[此处](http://downloads-sg.oss-ap-southeast-1.aliyuncs.com/datamoat/Security%20Testing%20Standard.pdf?spm=a2o9m.11193531.0.0.62c26bbexYKbnn&file=Security%20Testing%20Standard.pdf)查看我们的安全测试标准。
- 重复此步骤，直到清除**所有**发现的漏洞。
- 安全测试通常从Lazada获得足够信息以执行测试的那一天起最多5个工作日。

 ![](https://img.alicdn.com/top/i1/LB1G9bpw4jaK1RjSZKzXXXVwXXa)

**步骤4\.最终审核（无需任何操作）**

验证完成后，您将通过LAZOP控制台上的消息中心或电子邮件收到通知。

![](https://img.alicdn.com/top/i1/LB1eI15w5rpK1RjSZFhXXXSdXXa)

**步骤5\.完成**

敏感数据去模糊化完成。

![](https://img.alicdn.com/top/i1/LB1PRG8w3HqK1RjSZJnXXbNLpXa)

**问题？**

如有任何关于去模糊化流程的问题，请点击“**工单系统**”，创建一个“**Security Review**”类目的工单咨询。

 

![](https://tida.alicdn.com/oss_1659344705570_null_98ZeJVIc)

---

## 数据流图

<a id="109295"></a>

> Source: <https://open.lazada.com/apps/doc/doc?nodeId=12292&docId=109295&lang=en_US>

数据流程图（DFD）说明了系统在输入和输出方面如何处理数据。正如其名称所示，它专注于信息流转，数据来自哪里，去往哪里以及如何存储。

所有数据流图都包括四个主要元素：实体，处理过程，数据存储和数据流。

外部实体 \- 也称为起点和终点。这些数据流是DFD的输入和输出。它们可以代表另一个系统或子系统。

处理过程 \- 更改或转换数据的活动。它们将传入数据转换为传出数据，因此所有的处理过程必须在DFD上具有输入和输出。

数据存储 \- 数据存储不会生成任何操作，只是简单的保存数据以供以后访问。数据存储可以包括长期的保存文件或在等待处理时短存一批文档。

数据流 \- 用箭头符号来表示外部实体，处理过程和数据存储之间的数据移动，流的方向。

DFD的示例如下所示：

 ![](https://img.alicdn.com/top/i1/LB1MhMlxhTpK1RjSZFGXXcHqFXa)

请参考下面的DFD说明：

当外部实体触发流程时，它将通过流向的数据存储（信息存储）来搜索/查找详细信息，并提取外部实体视图所需的数据。

外部实体：请参考User

处理过程：请参考“Look up product availability”的执行动作

数据存储：请参考保存数据的“catalog“, ”product item“和”inventory item”框。

 ![](https://img.alicdn.com/top/i1/LB1ERAnxmzqK1RjSZFHXXb3CpXa)

外部实体：请参考Customer（流程开始和流程结束）。客户下订单时会触发此动作。订单详细信息和货物发票信息将发送到“Process Orders”框。

处理过程：在“Process Orders”框中，“订单和派件”的详细信息被处理并发送到“数据存储 \- Orders（数据存储）”

数据存储：请参考“Orders”框，其中存储了所有订单详细信息。

或者：

![](https://img.alicdn.com/top/i1/LB1TUEnxa6qK1RjSZFmXXX0PFXa)

---

