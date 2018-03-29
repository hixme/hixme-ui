# hixme-ui container

```bash
npm i --save @hixme-ui/container
```
[View it live](https://hixme.github.io/hixme-ui/container)

## Usage

```javascript
import Container from '@hixme-ui/container'

<Container padding='30px' shadow>
  <p>Content goes here</p>
</Container>

<Container flex textCenter opacity='.6'>
  <p>Flex content goes here</p>
</Container>
```

## Default Props

| Name            | Type        | Default        |
| --------------- | ----------- | -------------- |
| padding         | string      | 20px           |
| background      | string      | none           |


## Text Align

| Name            | Type        | Description                           |
| --------------- | ----------- | ------------------------------------- |
| textLeft        | bool        | text-align: left                      |
| textCenter      | bool        | text-align: center                    |
| textRight       | bool        | text-align: right                     |


## Background Color

| Name            | Type        | Description                           |
| --------------- | ----------- | ------------------------------------- |
| background      | string      | Apply CSS background properties       |
| default         | bool        | Default will apply a white background |
| primary         | bool        |                                       |
| success         | bool        |                                       |
| warning         | bool        |                                       |
| error           | bool        |                                       |
| muted           | bool        |                                       |
| white           | bool        |                                       |
| black           | bool        |                                       |
| red             | bool        |                                       |
| blue            | bool        |                                       |
| purple          | bool        |                                       |
| yellow          | bool        |                                       |
| green           | bool        |                                       |
| light           | bool        |                                       |
| lighter         | bool        |                                       |
| lightest        | bool        |


## Borders

| Name            | Type        | Description                           |
| --------------- | ----------- | ------------------------------------- |
| border          | string      | Apply CSS border properties           |
| borderColor     | string      | Apply CSS border-color properties     |
| borderTop       | string      | Apply CSS border-top properties       |
| borderBottom    | string      | Apply CSS border-bottom properties    |
| borderLeft      | string      | Apply CSS border-left properties      |
| borderRight     | string      | Apply CSS border-right properties     |
| dashed          | bool        | Apply 2px, grey dashed border         |
| rounded         | bool        | Apply 6px, border radius to container |


## Margin

| Name            | Type        | Description                                 |
| --------------- | ----------- | ------------------------------------------- |
| margin          | string      | Apply CSS margin properties                 |
| marginLeft      | string      | Apply CSS margin-left properties            |
| marginRight     | string      | Apply CSS margin-right properties           |
| marginTop       | string      | Apply CSS margin-top properties             |
| marginBottom    | string      | Apply CSS margin-bottom properties          |
| marginSides     | string      | Apply CSS margin-left and right properties  |


## Padding

| Name            | Type        | Description                                 |
| --------------- | ----------- | ------------------------------------------- |
| padding         | string      | Apply CSS padding properties                |
| paddingLeft     | string      | Apply CSS padding-left properties           |
| paddingRight    | string      | Apply CSS padding-right properties          |
| paddingTop      | string      | Apply CSS padding-top properties            |
| paddingBottom   | string      | Apply CSS padding-bottom properties         |
| paddingSides    | string      | Apply CSS padding-left and right properties |
| noPadding       | bool        | Remove default padding from container       |


## Width

| Name            | Type        | Description                              |
| --------------- | ----------- | ---------------------------------------- |
| width           | string      | Apply CSS width properties               |
| minWidth        | string      | Apply CSS min-width properties           |
| maxWidth        | string      | Apply CSS max-width properties           |


## Height

| Name            | Type        | Description                              |
| --------------- | ----------- | ---------------------------------------- |
| height          | string      | Apply CSS height properties              |
| minHeight       | string      | Apply CSS min-height properties          |
| maxHeight       | string      | Apply CSS max-height properties          |


## Flex Properties

| Name                | Type        | Description                          |
| ------------------- | ----------- | ------------------------------------ |
| flex                | bool        | Apply display: flex                  |
| inlineFlex          | bool        | Apply display: inline-flex           |
| flexWrap            | bool        | Apply flex-wrap: wrap                |
| flexRow             | bool        | Apply flex-direction: row            |
| flexColumn          | bool        | Apply flex-direction: column         |
| justifyStart        | bool        | Apply justify-content: flex-start    |
| justifyEnd          | bool        | Apply justify-content: flex-end      |
| justifyCenter       | bool        | Apply justify-content: center        |
| justifySpaceBetween | bool        | Apply justify-content: space-between |
| justifySpaceAround  | bool        | Apply justify-content: space-around  |
| alignStart          | bool        | Apply align-items: flex-start        |
| alignEnd            | bool        | Apply align-items: flex-end          |
| alignCenter         | bool        | Apply align-items: center            |
| alignSpaceBetween   | bool        | Apply align-items: space-between     |
| alignSpaceAround    | bool        | Apply align-items: space-around      |
| direction           | string      | Apply CSS flex-direction properties  |
| alignItems          | string      | Apply CSS align-items properties     |
| alignContent        | string      | Apply CSS align-content properties   |
| justifyContent      | string      | Apply CSS justify-content properties |
| alignSelf           | string      | Apply CSS align-self properties      |
| flexBasis           | string      | Apply CSS flex-basis properties      |
| flexGrow            | string      | Apply CSS flex-grow properties       |
| flexShrink          | string      | Apply CSS flex-shrink properties     |


## Other

| Name            | Type        | Description                           |
| --------------- | ----------- | ------------------------------------- |
| withOutline     | bool        | Add 1px solid red outline             |
| shadow          | bool        | Add box shadow to container           |
| heavyShadow     | bool        | Add heavy box shadow to container     |
| animate         | bool        | Add animation property to container   |
| opacity         | number      | Add opacity for container.            |


