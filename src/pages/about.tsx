import React from "react";

type Props = {};

const About = (props: Props) => {
	return (
		<>
			<div className="container">
				<img
					src="https://dummyimage.com/400x400/000/ffffff&text=A+pretty+picture+of+my+face"
					alt="That's me"
				/>
				<h2>WHOAMI</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quidem voluptatem impedit et eos molestiae ducimus ullam
					deserunt culpa beatae tenetur? Sequi nostrum suscipit ipsum
					iusto nobis voluptate consequuntur modi eius?
				</p>
			</div>
		</>
	);
};

export default About;
