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

#how to use cloud functions
firebase init
select "Functions: Configure and deploy Cloud Functions"
select language for this app we are using TypeScript
use ESlint type y to use it
and select yes when prompt to install dependencies

#deploy only functions(backend) -- you need to have blaze account membership 
firebase deploy --only functions
