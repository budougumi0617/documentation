const redirectUrls = [
   {
      "anchor":"#post-time-series-points",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#query-time-series-points",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-list-of-active-metrics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#search-metrics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#view-metric-metadata",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#metrics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-metric-metadata",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#mute-all-monitors",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-monitor-details",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#check-if-a-monitor-can-be-deleted",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#monitors-group-search",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#monitors-search",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-monitor-s-details",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#mute-a-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#unmute-a-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#monitors",
      "redirectURL":"api/v1/monitors/"
   },
   {
      "anchor":"#resolve-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#validate-a-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#unmute-all-monitors",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-a-monitor",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#comments",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-a-comment",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-comment",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#tracing",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#send-traces",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-slack-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-slack-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-slack",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-slack-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-channels-to-slack-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-gcp-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-gcp-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-gcp-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-gcp",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#list-all-gcp-integrations",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-child-organization",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-organization",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-organization",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#upload-idp-metadata",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#organizations",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-test",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-specific-result",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-test",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-a-test",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-the-most-recent-results",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#synthetics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-tests",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-devices-for-browser-checks",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-tests",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-available-locations",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#start-or-pause-a-test",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#service-checks",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#post-a-check-run",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#rate-limiting",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#screenboards",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-items-to-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-items-from-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-items-of-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-dashboard-lists",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-items-of-a-dashboard-list",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#dashboard-lists",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-user-to-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#roles",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#assign-permissions-to-a-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#remove-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-permissions",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-roles",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-permissions-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-users",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#revoke-permission",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#revoke-permissions",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-one-roles",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-one-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-fargate",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-daily-usage-attribution-file-url",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-network-flows",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-app-analytics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-hosts-and-containers",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-usage-across-your-multi-org-account",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-lambda",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-synthetics-browser",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#usage-metering",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-rum-sessions",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-custom-metrics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-top-500-custom-metrics-by-hourly-average",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-logs-by-index",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-snmp-devices",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-monthly-usage-attribution-file-url",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-daily-usage-attribution-available-files",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-logs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-monthly-usage-attribution-available-files",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-synthetics-api",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-analyzed-logs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-network-hosts",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#troubleshooting",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-aws-logs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#check-aws-lambda",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#list-all-aws-logs-integrations",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-an-aws-logs-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-list-of-aws-log-ready-services",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-aws-log-lambda-arn",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#enable-an-aws-logs-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#check-aws-services",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-aws-log-arn",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-host-tags",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-tags",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#remove-host-tags",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-tags-to-a-host",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-host-tags",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#tags",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#timeboards",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-an-api-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#key-management",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-an-application-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-an-api-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-an-api-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-api-keys",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-an-application-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-an-api-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-an-application-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-an-application-key",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-application-keys",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#list-namespace-rules",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-an-aws-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#list-all-aws-integrations",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-aws",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-an-aws-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#generate-external-ids",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-an-aws-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#logs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#send-logs-over-http",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#list-logs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-pipelines",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-pipelines",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-pipeline",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-pipeline",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#logs-pipelines",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-pipelines",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-pipelines-order",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-pipelines-order",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-dashboard",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-dashboard",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-dashboards",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#dashboards",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-dashboard",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-dashboard",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-monitor-downtime",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#schedule-monitor-downtime",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#cancel-monitor-downtime-by-scope",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#downtimes",
      "redirectURL":"api/v1/downtimes/"
   },
   {
      "anchor":"#get-all-monitor-downtimes",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#cancel-monitor-downtime",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-monitor-downtime",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-a-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#disable-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-user-invitation",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#users",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-user-permission-set",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-user-organisation",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#send-invitation-email-to-a-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-custom-variable-for-webhooks",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-custom-variable-for-webhooks",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-webhook-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-webhooks",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-webhook-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-custom-variable-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-custom-variable-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-webhook-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-webhook-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-custom-variable-for-webhooks-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#host-totals",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#unmute-a-host",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#search-hosts",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#mute-a-host",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#hosts",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#graph-snapshot",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#graphs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-an-azure-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#list-all-azure-integrations",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-an-azure-integration-host-filters",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-an azure-integration-host-filters",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-azure-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-azure",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-an-azure-integration",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#revoke-embed",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#enable-embed",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-embeds",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#embeddable-graphs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-specific-embed",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-embed",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#success-and-errors",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-indexes-order",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#logs-indexes",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-indexes",
      "redirectURL":"api/v1/logs-indexes/#get-all-indexes"
   },
   {
      "anchor":"#update-an-index",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-indexes-order",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-an-index",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#query-the-event-stream",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-an-event",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#events",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#post-an-event",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#overview",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#service-level-objectives",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-service-level-objective",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-a-slo",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#bulk-delete-slo-timeframes",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#search-service-level-objectives",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-slo",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#edit-a-service-level-objective",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-slo",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-slo-s-details",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-an-slo-s-history",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-service-level-objective",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-many-service-level-objectives",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-service-level-objective-s-details",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-service-level-objective-s-history",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-multiple-slos",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#bulk-delete-service-level-objectives-time-frames",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#can-delete-a-service-level-objective-s",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#search-slo-s",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#check-if-a-slo-can-be-deleted",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-pagerduty-service#de",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-pagerduty-service",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-a-pagerduty-service",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-pagerduty",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-pagerduty-service",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#add-a-pagerduty-service",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#authentication",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#query-associated-to-a-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#query-associated-to-a-user",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-one-restriction-query",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#remove-a-restriction-query-from-a-role",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#delete-a-restriction-query",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#update-a-restriction-query",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#associate-a-role-with-a-restriction-query",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#restriction-queries",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#create-a-restriction-query",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-all-restriction-queries",
      "redirectURL":"api/v1/"
   }
]

export default redirectUrls;
