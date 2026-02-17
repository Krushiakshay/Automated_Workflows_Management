import { useState, useEffect, useCallback } from 'react';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Activity,
  Building2,
  Zap
} from 'lucide-react';

// Types
interface Alert {
  id: number;
  message: string;
  type: 'warning' | 'success' | 'info';
  timestamp: Date;
}

interface DepartmentData {
  name: string;
  productivity: number;
  attendance: number;
}

// Initial Data
const initialDepartments: DepartmentData[] = [
  { name: 'Engineering', productivity: 85, attendance: 92 },
  { name: 'Marketing', productivity: 78, attendance: 88 },
  { name: 'Sales', productivity: 91, attendance: 95 },
  { name: 'HR', productivity: 72, attendance: 90 },
  { name: 'Finance', productivity: 88, attendance: 94 },
];

const aiAlerts = [
  { message: 'Low productivity detected in Marketing team', type: 'warning' as const },
  { message: 'High workload risk identified in Engineering', type: 'warning' as const },
  { message: 'Attendance trend improving in Sales', type: 'success' as const },
  { message: 'Optimal workforce allocation achieved', type: 'success' as const },
  { message: 'Peak performance hours: 9AM - 11AM', type: 'info' as const },
  { message: 'Recommended break time approaching for Team A', type: 'info' as const },
  { message: 'Overtime alert: 3 employees exceeding limit', type: 'warning' as const },
  { message: 'Project deadline risk: Resource reallocation suggested', type: 'warning' as const },
];

const DashboardSection = () => {
  const [employeeCount, setEmployeeCount] = useState(487);
  const [attendancePercentage, setAttendancePercentage] = useState(91.5);
  const [productivityScore, setProductivityScore] = useState(84);
  const [departments, setDepartments] = useState(initialDepartments);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isLive, setIsLive] = useState(true);

  // Generate random variation
  const randomVariation = useCallback((base: number, range: number) => {
    return Math.max(0, Math.min(100, base + (Math.random() - 0.5) * range));
  }, []);

  // Update metrics every few seconds
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setEmployeeCount(prev => Math.floor(randomVariation(prev, 10)));
      setAttendancePercentage(prev => Math.round(randomVariation(prev, 4) * 10) / 10);
      setProductivityScore(prev => Math.floor(randomVariation(prev, 6)));
      
      setDepartments(prev => prev.map(dept => ({
        ...dept,
        productivity: Math.floor(randomVariation(dept.productivity, 8)),
        attendance: Math.floor(randomVariation(dept.attendance, 4)),
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive, randomVariation]);

  // Add new alert periodically
  useEffect(() => {
    if (!isLive) return;

    const addAlert = () => {
      const randomAlert = aiAlerts[Math.floor(Math.random() * aiAlerts.length)];
      const newAlert: Alert = {
        id: Date.now(),
        ...randomAlert,
        timestamp: new Date(),
      };
      
      setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
    };

    // Add initial alert
    addAlert();

    const interval = setInterval(addAlert, 5000);
    return () => clearInterval(interval);
  }, [isLive]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'success': return CheckCircle;
      default: return Activity;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning': return 'text-warning border-warning/30 bg-warning/5';
      case 'success': return 'text-success border-success/30 bg-success/5';
      default: return 'text-primary border-primary/30 bg-primary/5';
    }
  };

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Live Demo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Real-Time Analytics</span>{' '}
            <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Experience the power of real-time workforce analytics with this live simulation.
          </p>
          
          {/* Live Indicator */}
          <button
            onClick={() => setIsLive(!isLive)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
              isLive 
                ? 'border-success/50 bg-success/10 text-success' 
                : 'border-muted-foreground/30 bg-muted/50 text-muted-foreground'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`} />
            {isLive ? 'Live Updates Active' : 'Updates Paused'}
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Stats */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Employee Count */}
            <div className="card-futuristic glow-box hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground">Total Active</span>
              </div>
              <div className="stat-value gradient-text">{employeeCount}</div>
              <div className="text-sm text-muted-foreground mt-1">Employees Online</div>
            </div>

            {/* Attendance */}
            <div className="card-futuristic glow-box hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-6 h-6 text-success" />
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              <div className="stat-value text-success">{attendancePercentage}%</div>
              <div className="text-sm text-muted-foreground mt-1">Attendance Rate</div>
            </div>

            {/* Productivity */}
            <div className="card-futuristic glow-box hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
                <span className="text-xs text-muted-foreground">Average</span>
              </div>
              <div className="stat-value text-secondary">{productivityScore}</div>
              <div className="text-sm text-muted-foreground mt-1">Productivity Score</div>
            </div>

            {/* Department Performance Chart */}
            <div className="sm:col-span-2 lg:col-span-3 card-futuristic">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">Department Performance</h3>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-sm bg-primary" />
                    <span className="text-muted-foreground">Productivity</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-sm bg-success" />
                    <span className="text-muted-foreground">Attendance</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="flex items-end justify-between gap-4 h-48">
                {departments.map((dept, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex gap-1 h-40 items-end">
                      {/* Productivity Bar */}
                      <div className="flex-1 chart-bar h-full">
                        <div 
                          className="chart-bar-fill bg-gradient-to-t from-primary to-primary/50"
                          style={{ height: `${dept.productivity}%` }}
                        />
                      </div>
                      {/* Attendance Bar */}
                      <div className="flex-1 chart-bar h-full">
                        <div 
                          className="chart-bar-fill bg-gradient-to-t from-success to-success/50"
                          style={{ height: `${dept.attendance}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground truncate w-full text-center">
                      {dept.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Alerts Panel */}
          <div className="card-futuristic h-fit lg:h-auto">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <h3 className="font-display font-semibold text-foreground">AI Insights</h3>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {alerts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Waiting for insights...</p>
                </div>
              ) : (
                alerts.map((alert) => {
                  const Icon = getAlertIcon(alert.type);
                  return (
                    <div
                      key={alert.id}
                      className={`alert-card ${getAlertColor(alert.type)}`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {alert.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
