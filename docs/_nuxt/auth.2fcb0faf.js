import{Z as e,B as i,D as n}from"./entry.04d953b4.js";const p=e((a,o)=>{const t=i().$pb.authStore.isValid;if(!t&&a.path=="/maven/account"||!t&&a.path=="/maven/account/update")return n("/maven/login");if(t&&a.path=="/maven/login"||t&&a.path=="/maven/initiation")return n("/maven/account")});export{p as default};