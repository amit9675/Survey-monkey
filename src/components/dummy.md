1
<Text fontSize='30px'>Contact us Today !</Text><br />
                        <List spacing={3}>
                            <ListItem fontWeight='500' fontStyle='oblique'>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Manage multiple users and gain visibility into all survey data collected across your organization with admin controls and dashboards.
                            </ListItem>
                            <ListItem fontWeight='500' fontStyle='oblique'>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Ensure confidential data is protected with enhanced security including encryption, SSO, and features that help you remain compliant with HIPAA and GDPR.
                            </ListItem>
                            <ListItem fontWeight='500' fontStyle='oblique'>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Make feedback automated and actionable by connecting to key business systems using APIs and powerful integrations, including Salesforce, Marketo, Tableau, and more.
                            </ListItem>

                        </List>
                        <br />
                        <AspectRatio maxW='660px' ratio={1}>
                            <iframe height="480" width="500"
                                src="https://www.youtube.com/embed/hCDBt_vDu_Y">
                            </iframe>
                        </AspectRatio>


                        2

                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input type='text' required />
                            <FormHelperText>Enter your first name</FormHelperText>
                            <FormLabel>Last Name</FormLabel>
                            <Input type='text' required />
                            <FormHelperText>Enter your last name</FormHelperText>
                            <FormLabel>Business Email</FormLabel>
                            <Input type='email' required />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type='number' required />
                            <FormHelperText>Enter your phone number</FormHelperText>
                            <FormLabel>Country</FormLabel>
                            <Input type='text' required />
                            <FormHelperText>Enter your country name</FormHelperText> <br />
                            <Checkbox size='md' colorScheme='green' defaultChecked>

                            </Checkbox>
                            <Text>I wish to receive other information about Momentive like product updates, news, information, and special promotions.
                                Visit the Privacy Notice for information on how we use your information.
                                You can unsubscribe anytime using a link at the bottom of our communications.</Text> <br />
                            <Button colorScheme='whatsapp'>Contact Now</Button>
                        </FormControl>