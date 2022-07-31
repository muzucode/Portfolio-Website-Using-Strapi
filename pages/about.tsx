import { NextPage } from "next";
import styled from "styled-components";
import { Block, IBlock } from "../components/composite/Block";
import { PersistentDrawer } from "../modules/materialui.module";


const About: NextPage = () => {


  const BlockProps: IBlock = {
    BlockContainer: {
      style: {
        backgroundColor: '#fff',
        fontColor: '#fff',
        border: '1px solid red'
      },
      data: {
        body: ''
      }
    },
    LinkButton: {
      style: {
        backgroundColor: '#fff',
        fontColor: '#000',
        border: '1px solid #000',
      },
      data: {
        title: 'Request a Quote',
        subtitle: '',
        link: 'https://www.google.com'
      }
    },
    BlockTitle: {
      style: {
        color: 'red',
        fontSize: '14px'
      },
      data: {
        title: 'Test description'
      }
    },
    BlockDescription: {
      style: {
        color: '#000',
        fontSize: '30px'
      },
      data: {
        description: 'Lorem ipsum',
      }
    }
  }

  return (
    <Container>
      <MenuBar>
        <Brand>Ultra Name</Brand>
      </MenuBar>

      <HeroImage></HeroImage>

      <Block {...BlockProps}></Block>


    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`

const MenuBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  color: #979797;
  align-items: center;
  display: flex;
  justify-content: center;
`
const Brand = styled.h2`
  font-size: 16px;
  font-family: 'Ibarra Real Nova', serif;
`
const HeroImage = styled.img`
  height: 400px;
  width: 100%;
  /* border: 1px solid red; */
  background-image: url(/img-hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-style: none;
  border: none;
`




















export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default About