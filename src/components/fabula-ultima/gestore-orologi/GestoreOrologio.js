import { Button, Center, Col, Divider, Grid, Modal, Slider, Text, Title } from "@mantine/core";
import React from "react";

const DEFAULT_SECTIONS_COUNT = 8;

export default class GestoreOrologio extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();

        this.state = {
            activeSections: 0,
            sectionsCount: DEFAULT_SECTIONS_COUNT,
            showModal: false,
            showSlider: true,
        };

        this.decreaseActiveSections = this.decreaseActiveSections.bind(this);
        this.increaseActiveSections = this.increaseActiveSections.bind(this);
        this.updateSectionsCount = this.updateSectionsCount.bind(this);
        this.resetClock = this.resetClock.bind(this);
    }

    componentDidMount() {
        this.resizeCanvasToDisplaySize(this.canvasRef.current);
        this.drawClock();
    }

    componentDidUpdate() {
        this.drawClock();
    }

    decreaseActiveSections() {
        this.setState({activeSections: Math.max(0, this.state.activeSections - 1)});
    }

    drawClock() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clean up
        ctx.clearRect(0,0, canvas.width, canvas.height);

        // Setup color
        ctx.strokeStyle = '#2b4a42';
        ctx.fillStyle = '#2b4a4288';

        // Useful properties
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const externalLineWidth = 5;
        const externalCircleRadius = (canvas.width / 2) - externalLineWidth;
        const externalSmallCircleRadius = externalCircleRadius - externalLineWidth * 2;
        const sectionAngle = (Math.PI * 2) / this.state.sectionsCount;

        // Draw external circle
        ctx.lineWidth = externalLineWidth;
        ctx.beginPath();
        ctx.arc(centerX, centerY, externalCircleRadius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        // Draw external small circle
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, externalSmallCircleRadius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        // Draw internal dividers and active sections
        ctx.lineWidth = 1;
        let remainingActiveSections = this.state.activeSections;
        for (let alpha=-(Math.PI / 2); alpha < (Math.PI * 3 / 2); alpha = alpha + sectionAngle) {
            const destinationPointX = centerX + (externalCircleRadius * Math.cos(alpha));
            const destinationPointY = centerY + (externalCircleRadius * Math.sin(alpha));
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(destinationPointX, destinationPointY);
            ctx.closePath();
            ctx.stroke();

            if (remainingActiveSections > 0) {
                const startingAngle = alpha;
                const endingAngle = startingAngle + sectionAngle;

                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, externalCircleRadius, startingAngle, endingAngle);
                ctx.closePath();
                ctx.fill();

                remainingActiveSections--;
            }
        }
    }

    increaseActiveSections() {
        this.setState({
            activeSections: Math.min(this.state.sectionsCount, this.state.activeSections + 1),
            showSlider: false,
        });
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    this.state.showSlider
                    &&
                    <>
                        <Text>
                            <Title order={3}>Configura numero di spicchi</Title>
                        </Text>
                        <Slider
                            size="lg"
                            showLabelOnHover={false}
                            marks={[
                                { value: 4, label: 4 },
                                { value: 6, label: 6 },
                                { value: 8, label: 8 },
                                { value: 10, label: 10 },
                                { value: 12, label: 12 },
                            ]}
                            step={2}
                            defaultValue={this.state.sectionsCount}
                            min={4}
                            max={12}
                            onChange={this.updateSectionsCount}
                            style={{margin: '1rem 0.5rem'}}
                        />
                    </>
                }
                <Center>
                    <Button
                        size='md'
                        variant='outline'
                        onClick={() => {this.setState({showModal: true})}}
                        uppercase
                        disabled={this.state.showSlider}
                        style={{margin: '1rem 0'}}
                    >
                        Reset
                    </Button>
                    <Modal
                        opened={this.state.showModal}
                        onClose={() => {this.setState({showModal: false})}}
                        hideCloseButton={true}
                        size='lg'
                    >
                        <Grid columns={2}>
                            <Col span={2}>
                                <Title order={5}>Sei sicuro di voler resettare l'orologio?</Title>
                                <Text>Le sezioni attivate e il numero massimo di sezioni saranno riportate ai valori di default</Text>
                            </Col>
                            <Col span={1}>
                                <Button
                                    size='md'
                                    onClick={() => {this.setState({showModal: false})}}
                                    uppercase
                                    variant='outline'
                                >
                                    Annulla
                                </Button>
                            </Col>
                            <Col span={1} style={{textAlign: 'right'}}>
                                <Button size='md' onClick={this.resetClock} uppercase>Conferma</Button>
                            </Col>
                        </Grid>
                    </Modal>
                </Center>
                <Divider style={{margin: '1rem'}}/>
                <Grid columns={2}>
                    <Col
                        span={2}
                        style={{
                            // Height between 25% and 50% of the viewport height.
                            // Default value set to 30% of the width (to appear proportionate)
                            minHeight: '25vh',
                            height: '30vw',
                            maxHeight: '50vh',
                            textAlign: 'center',
                        }}
                    >
                        <canvas ref={this.canvasRef} style={{height: '100%', aspectRatio: '1'}}/>
                    </Col>
                    <Col span={1} style={{textAlign: 'center'}}>
                        <Button
                            size='md'
                            onClick={this.decreaseActiveSections}
                            disabled={this.state.activeSections === 0}
                        >-</Button>
                    </Col>
                    <Col span={1} style={{textAlign: 'center'}}>
                        <Button
                            size='md'
                            onClick={this.increaseActiveSections}
                            disabled={this.state.activeSections === this.state.sectionsCount}
                        >+</Button>
                    </Col>
                </Grid>
            </div>
        );
    }

    resetClock() {
        this.setState({
            activeSections: 0,
            sectionsCount: DEFAULT_SECTIONS_COUNT,
            showModal: false,
            showSlider: true,
        });
    }

    resizeCanvasToDisplaySize(canvas) {
        // Lookup the size the browser is displaying the canvas in CSS pixels.
        const displayWidth  = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
       
        // Check if the canvas is not the same size.
        const needResize = canvas.width  !== displayWidth || canvas.height !== displayHeight;
       
        if (needResize) {
            // Make the canvas the same size
            canvas.width  = displayWidth;
            canvas.height = displayHeight;
        }
    }

    updateSectionsCount(value) {
        this.setState({sectionsCount: value});
    }
}
