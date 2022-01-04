import { MongoClient, ObjectId } from 'mongodb';
import React from 'react';
import MeetupDetail from '../components/meetups/MeetupDetails';
import Head from 'next/head';

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <MeetupDetail
        title={props.title}
        id={props.id}
        image={props.image}
        address={props.address}
        description={props.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://hramirez:gamma123@cluster0.hydjx.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://hramirez:gamma123@cluster0.hydjx.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  console.log('RESULT', meetup);

  client.close();

  return {
    props: {
      ...meetup,
      id: meetup._id.toString(),
      _id: meetup._id.toString(),
    },
  };
}

export default MeetupDetails;
