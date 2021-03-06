module.exports = {
    validInput1: {
      fullname: 'Bruce',
      username: 'Banner',
      email: 'banner@yahoo.com',
      password: 'bruce banner',
      profileimage: '',
      guide: true
    },
    validInput2: {
      fullname: 'Mike',
      username: 'Owen',
      email: 'mk@yahoo.com',
      password: 'ulor mike',
      profileimage: '',
      guide: false
    },
    validInput3: {
      fullname: 'frodo',
      username: 'Bagins',
      email: 'frod@yahoo.com',
      password: 'shire prince',
      profileimage: '',
      guide: true
    },
    existingUsername: {
      fullname: 'Dave',
      username: 'Owen',
      email: 'dave@yahoo.com',
      password: 'dave 1234',
      profileimage: '',
      guide: true
    },
  
    existingEmail: {
      fullname: 'Barry',
      username: 'Allen',
      email: 'banner@yahoo.com',
      password: 'theFlash',
      profileimage: ''
    },
    incompleteData: {
      fullname: 'Anna',
      username: 'Jones',
      email: 'annie@yahoo.com'
    },
    emptyData: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      profileimage: ''
    },
    improperData: {
      fullname: '23BruceBanner',
      username: 'J',
      email: 'banner',
      password: 'bruce',
      profileimage: 'Mike'
    },
    unregisteredEmail: {
      email: 'notreg@getMaxListeners.com'
    },
    registeredEmail: {
      email: 'banner@yahoo.com'
    },
    newPassword: {
      password: 'abcdefghij'
    },
    userOneLogin: { email: 'banner@yahoo.com', password: 'bruce banner' },
    userTwoLogin: { email: 'mk@yahoo.com', password: 'ulor mike' },
    guideLogin: { email: 'frod@yahoo.com', password: 'shire prince' },
    adminLogin: { email: 'admin@andela.com', password: '12345' },
    emptyLoginData: { email: '', password: '' },
    noEmail: { email: '', password: 'bruce banner' },
    noPassword: { email: 'mk@yahoo.com', password: '' },
    invalidEmail: { email: 'wrongEmail', password: 'bruce banner' },
    invalidPassword: { email: 'Bruce Banner', password: 'wrongPassword' },
    invalidEmailPassword: { email: 'wrongEmail', password: 'wrongPassword' }
  };