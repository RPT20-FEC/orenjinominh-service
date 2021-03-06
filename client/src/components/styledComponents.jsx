import styled from 'styled-components';

export const Module = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  justify-content: left;
`
export const Header = styled.header`
color: rgb(34, 34, 34);
font-weight: 500;
font-size: 22px;
line-height: 26px;
padding-left: 40px;
padding-top: 50px;
padding-bottom: 30px;
`

export const ImageContainer = styled.section`
  z-index: 1;
  position: relative !important;
  height: 200px;
`

export const Image = styled.img`
  object-fit: cover;
`

export const FavoriteIcon = styled.button`
  position: absolute !important;
  top: 0;
  right: 0;
  z-index: 2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export const Details = styled.section`
  font-weight: 200px;
  font-size: 18px;
  line-height: 20px;
`

export const SleepArrangement = styled.span`
  font-size: 14px;
  display: block;
  float: left;
  color: rgb(113, 113, 113);
`

export const HeadlinePricing = styled.section`
  display: block;
  float: left;
  clear: left;
`

export const Reviews = styled.span`
  color: rgb(113, 113, 113);
`

export const Star = styled.span`
  font-size: 14px;
  display: block;
  float: right;
`

export const BorderlessButton = styled.button`
  border: 0;
  font-size: 40px;
  color: #a9a9a9;
`
