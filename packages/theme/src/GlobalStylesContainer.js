/* eslint-disable no-unused-expressions, max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'

export default class GlobalStylesContainer extends React.Component {
  componentWillMount() {
    injectGlobal`
@import '~normalize.css/normalize';
@import url("https://fast.fonts.net/lt/1.css?apiType=css&c=79a1ceb5-780f-4fc9-ae1d-104008072ee2&fontids=1437336,1437356,1437416,1437426,1437456,1437496,1437516,1437536,1437546,1437556,1437566");

@font-face{
font-family:"Avenir-Next_UltraLight";
src:url("fonts/1437416/1c2faa72-b1b1-421e-bc47-43ebd67cc8bd.eot?#iefix");
src:url("fonts/1437416/1c2faa72-b1b1-421e-bc47-43ebd67cc8bd.eot?#iefix") format("eot"),
    url("fonts/1437416/599179d8-2203-4a9f-b271-010a707271dc.woff2") format("woff2"),
    url("fonts/1437416/3b0370cd-39d6-4a24-9c65-60787db0ebe0.woff") format("woff"),
    url("fonts/1437416/55f63dc4-546d-4886-95bd-d2360a19f485.ttf") format("truetype");
}
@font-face{
font-family:"Avenir-Next_Light";
src:url("fonts/1437356/d7595278-c472-486c-a142-86cb160a1226.eot?#iefix");
src:url("fonts/1437356/d7595278-c472-486c-a142-86cb160a1226.eot?#iefix") format("eot"),
    url("fonts/1437356/5934eb8d-da89-4362-81fa-111b5b9f8c6c.woff2") format("woff2"),
    url("fonts/1437356/f6d0771b-5a61-449b-87e8-b3175abfc271.woff") format("woff"),
    url("fonts/1437356/e4bf5c77-59b9-49bf-8497-2f26b4101c11.ttf") format("truetype");
}
@font-face{
font-family:"Avenir-Next_Regular";
src:url("fonts/1437496/483d8937-5e17-4378-9c51-aa91a3d9e1eb.eot?#iefix");
src:url("fonts/1437496/483d8937-5e17-4378-9c51-aa91a3d9e1eb.eot?#iefix") format("eot"),
    url("fonts/1437496/ed4b9060-b5ab-4379-8840-0b50a15258b7.woff2") format("woff2"),
    url("fonts/1437496/9b47db0b-77fb-4bb0-b5c2-3c131a36fc4d.woff") format("woff"),
    url("fonts/1437496/9c8b7e5f-b3ca-435d-a197-b3dfeae277a1.ttf") format("truetype");
}
@font-face{
font-family:"Avenir-Next_Medium";
src:url("fonts/1437536/930383e5-36a7-4f9b-ba93-91da56426238.eot?#iefix");
src:url("fonts/1437536/930383e5-36a7-4f9b-ba93-91da56426238.eot?#iefix") format("eot"),
    url("fonts/1437536/91e99835-1d11-4c71-af9b-aed2a94329e7.woff2") format("woff2"),
    url("fonts/1437536/4952d2e1-e0c0-46ca-b32e-c24a5882c471.woff") format("woff"),
    url("fonts/1437536/55e40b4b-6742-4cea-b87c-382b0c65d12d.ttf") format("truetype");
}
@font-face{
font-family:"Avenir-Next_Demi";
src:url("fonts/1437516/47d79f32-82c5-4a74-9646-5150297aabc1.eot?#iefix");
src:url("fonts/1437516/47d79f32-82c5-4a74-9646-5150297aabc1.eot?#iefix") format("eot"),
    url("fonts/1437516/249228f0-61ac-40cc-a5a5-5609c9816e3f.woff2") format("woff2"),
    url("fonts/1437516/efba18ed-80cc-49c4-997a-fbb140739d19.woff") format("woff"),
    url("fonts/1437516/750a20ec-9242-42a8-b3bd-c4dcec552196.ttf") format("truetype");
}
@font-face{
font-family:"Avenir-Next_Bold";
src:url("fonts/1437556/6ff8ab07-ccb4-4a91-8f0f-2bd4367902e8.eot?#iefix");
src:url("fonts/1437556/6ff8ab07-ccb4-4a91-8f0f-2bd4367902e8.eot?#iefix") format("eot"),
    url("fonts/1437556/91799b0e-0ef8-446e-b274-5509412e1242.woff2") format("woff2"),
    url("fonts/1437556/97fb5311-bdbd-46bc-bf69-3bcf8c744cda.woff") format("woff"),
    url("fonts/1437556/88093bd3-b377-4278-8abe-8460dd24d0e8.ttf") format("truetype");
}
@font-face{
font-family:"Avenir-Next_Heavy";
src:url("fonts/1437456/aa8f537e-7081-4c0e-9236-0f9fcfac4541.eot?#iefix");
src:url("fonts/1437456/aa8f537e-7081-4c0e-9236-0f9fcfac4541.eot?#iefix") format("eot"),
    url("fonts/1437456/89f00a92-1c94-43f4-9b5d-a9a7d3573805.woff2") format("woff2"),
    url("fonts/1437456/97f8a201-6c8c-4ab9-9427-7dac9cb31534.woff") format("woff"),
    url("fonts/1437456/7e15ebeb-7336-4881-b9fd-14d423ae42d3.ttf") format("truetype");
}
html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Avenir-Next_Medium', 'HelveticaNeue-Roman', 'Helvetica Neue Roman', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: 14px;
  color: #3A4951;
  line-height: 1.42857143;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
}
    `
  }

  render() {
    return this.props.children
  }
}

GlobalStylesContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

