##local dev
npm start

##first time build and deploy to firebase
firebase login

firebase init ---> select hosting with spacebar and existing project

npm run build

firebase deploy

#workaround for react spring prod issue https://github.com/pmndrs/react-spring/issues/1078
#permanent fix will be deployed on "react-spring": "^9.0.0-rc.4" upgrade when avaiable!
npm run postinstall
npm run build
