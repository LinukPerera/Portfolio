.contact {
    // ... existing styles ...

    .body {
        padding-top: 60px; // Reduced from 100px for mobile

        @media (min-width: 768px) {
            padding-top: 200px;
        }

        .title {
            padding-bottom: 40px; // Reduced from 50px for mobile

            @media (min-width: 768px) {
                padding-bottom: 100px;
                // ... other existing styles ...
            }

            span {
                gap: 20px; // Reduced from 30px for mobile
                margin-bottom: 15px; // Reduced from 20px for mobile

                @media (min-width: 768px) {
                    // ... existing styles ...
                }

                .imageContainer {
                    width: 70px; // Reduced from 80px for mobile
                    height: 70px; // Reduced from 80px for mobile

                    @media (min-width: 768px) {
                        // ... existing styles ...
                    }
                }

                h2 {
                    font-size: 2.5rem; // More controlled size for mobile
                    margin-left: 0;

                    @media (min-width: 768px) {
                        // ... existing styles ...
                    }
                }
            }

            h2 {
                font-size: 3rem; // More controlled size for mobile
                line-height: 1.1; // Tighter line height

                @media (min-width: 768px) {
                    // ... existing styles ...
                }
            }

            .buttonContainer {
                margin-top: 20px; // Reduced from 30px for mobile

                @media (min-width: 768px) {
                    // ... existing styles ...
                }
            }

            .button {
                width: 120px; // Reduced from 140px for mobile
                height: 120px; // Reduced from 140px for mobile

                @media (min-width: 768px) {
                    // ... existing styles ...
                }

                p {
                    font-size: 13px; // Slightly smaller text
                }
            }
        }

        .nav {
            margin-top: 40px; // Reduced from 50px for mobile
            gap: 10px; // Reduced from 15px for mobile

            @media (min-width: 768px) {
                // ... existing styles ...
            }

            .rounded {
                width: 100%;
                max-width: 180px; // Slightly smaller max width
            }
        }

        .info {
            margin-top: 60px; // Reduced from 100px for mobile
            padding: 15px; // Reduced from 20px for mobile
            gap: 30px; // Reduced from 50px for mobile

            @media (min-width: 768px) {
                // ... existing styles ...
            }

            div {
                gap: 15px; // Reduced from 20px for mobile

                @media (min-width: 768px) {
                    // ... existing styles ...
                }

                span {
                    gap: 3px; // Reduced from 5px for mobile

                    @media (min-width: 768px) {
                        // ... existing styles ...
                    }
                }
            }
        }
    }
}

.a {
    padding: 8px 16px; // Reduced from 10px 20px for mobile

    @media (min-width: 768px) {
        // ... existing styles ...
    }
}
