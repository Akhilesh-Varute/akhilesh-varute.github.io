// components/common/ErrorBoundary.js
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          color: 'var(--text-primary)'
        }}>
          <h2>Something went wrong.</h2>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '1rem 2rem',
              marginTop: '1rem',
              background: 'var(--primary)',
              color: 'var(--background)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}