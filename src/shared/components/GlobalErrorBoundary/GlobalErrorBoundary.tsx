import { Component, ErrorInfo } from 'react';
import styles from './GlobalErrorBoundary.module.css';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[GlobalErrorBoundary] Caught error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.card}>
            <span className={styles.icon}>⚠️</span>
            <h2 className={styles.title}>Qualcosa è andato storto</h2>
            <p className={styles.message}>
              {this.state.error?.message ?? 'Errore sconosciuto'}
            </p>
            <pre className={styles.stack}>
              {this.state.error?.stack?.split('\n').slice(0, 4).join('\n')}
            </pre>
            <button className={styles.button} onClick={this.handleReset}>
              Riprova
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
