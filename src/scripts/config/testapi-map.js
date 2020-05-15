const redirectUrls = [
   {
      "anchor":"#post-time-series-points",
      "redirectURL":"api/v1/metrics/#submit-metrics"
   },
   {
      "anchor":"#query-time-series-points",
      "redirectURL":"api/v1/metrics/#query-timeseries-points"
   },
   {
      "anchor":"#get-list-of-active-metrics",
      "redirectURL":"api/v1/metrics/#get-active-metrics-list"
   },
   {
      "anchor":"#search-metrics",
      "redirectURL":"api/v1/metrics/#search-metrics"
   },
   {
      "anchor":"#view-metric-metadata",
      "redirectURL":"api/v1/get-metric-metadata"
   },
   {
      "anchor":"#metrics",
      "redirectURL":"api/v1/metrics/"
   },
   {
      "anchor":"#edit-metric-metadata",
      "redirectURL":"api/v1/edit-metric-metadata"
   },
   {
      "anchor":"#mute-all-monitors",
      "redirectURL":"api/v1/monitors/#mute-all-monitors"
   },
   {
      "anchor":"#delete-a-monitor",
      "redirectURL":"api/v1/monitors/#delete-a-monitor"
   },
   {
      "anchor":"#get-all-monitor-details",
      "redirectURL":"api/v1/monitors/#get-all-monitor-details"
   },
   {
      "anchor":"#check-if-a-monitor-can-be-deleted",
      "redirectURL":"api/v1/monitors/#check-if-a-monitor-can-be-deleted"
   },
   {
      "anchor":"#create-a-monitor",
      "redirectURL":"api/v1/monitors/#create-a-monitor"
   },
   {
      "anchor":"#monitors-group-search",
      "redirectURL":"api/v1/monitors/#monitors-group-search"
   },
   {
      "anchor":"#monitors-search",
      "redirectURL":"api/v1/monitors/#monitors-search"
   },
   {
      "anchor":"#get-a-monitor-s-details",
      "redirectURL":"api/v1/monitors/#get-a-monitors-details"
   },
   {
      "anchor":"#mute-a-monitor",
      "redirectURL":"api/v1/monitors/#mute-a-monitor"
   },
   {
      "anchor":"#unmute-a-monitor",
      "redirectURL":"api/v1/monitors/#unmute-a-monitor"
   },
   {
      "anchor":"#monitors",
      "redirectURL":"api/v1/monitors/"
   },
   {
      "anchor":"#resolve-monitor",
      "redirectURL":"api/v1/monitors/#resolve-monitor"
   },
   {
      "anchor":"#validate-a-monitor",
      "redirectURL":"api/v1/monitors/#validate-a-monitor"
   },
   {
      "anchor":"#unmute-all-monitors",
      "redirectURL":"api/v1/monitors/#unmute-all-monitors"
   },
   {
      "anchor":"#edit-a-monitor",
      "redirectURL":"api/v1/monitors/#edit-a-monitor"
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
      "redirectURL":"api/v1/tracing/"
   },
   {
      "anchor":"#send-traces",
      "redirectURL":"api/v1/tracing/#send-traces"
   },
   {
      "anchor":"#get-slack-integration",
      "redirectURL":"api/v1/slack-integration/#get-info-about-a-slack-integration"
   },
   {
      "anchor":"#delete-a-slack-integration",
      "redirectURL":"api/v1/slack-integration/#delete-a-slack-integration"
   },
   {
      "anchor":"#integration-slack",
      "redirectURL":"api/v1/slack-integration/"
   },
   {
      "anchor":"#create-a-slack-integration",
      "redirectURL":"api/v1/slack-integration/#create-a-slack-integration"
   },
   {
      "anchor":"#add-channels-to-slack-integration",
      "redirectURL":"api/v1/slack-integration/#add-channels-to-slack-integration"
   },
   {
      "anchor":"#create-a-gcp-integration",
      "redirectURL":"api/v1/gcp-integration/#create-a-gcp-integration"
   },
   {
      "anchor":"#update-gcp-integration",
      "redirectURL":"api/v1/gcp-integration/#update-a-gcp-integration"
   },
   {
      "anchor":"#delete-a-gcp-integration",
      "redirectURL":"api/v1/gcp-integration/#delete-a-gcp-integration"
   },
   {
      "anchor":"#integration-gcp",
      "redirectURL":"api/v1/gcp-integration/"
   },
   {
      "anchor":"#list-all-gcp-integrations",
      "redirectURL":"api/v1/gcp-integration/#list-all-gcp-integrations"
   },
   {
      "anchor":"#create-child-organization",
      "redirectURL":"api/v1/organizations/#create-a-child-organization"
   },
   {
      "anchor":"#get-organization",
      "redirectURL":"api/v1/organizations/#get-organization-information"
   },
   {
      "anchor":"#update-organization",
      "redirectURL":"api/v1/organizations/#update-your-organization"
   },
   {
      "anchor":"#upload-idp-metadata",
      "redirectURL":"api/v1/organizations/#upload-idp-metadata"
   },
   {
      "anchor":"#organizations",
      "redirectURL":"api/v1/organizations/"
   },
   {
      "anchor":"#create-a-test",
      "redirectURL":"api/v1/synthetics/#create-a-test"
   },
   {
      "anchor":"#get-a-specific-result",
      "redirectURL":"api/v1/synthetics/#get-a-test-result-api"
   },
   {
      "anchor":"#get-a-test",
      "redirectURL":"api/v1/synthetics/#get-a-test-configuration"
   },
   {
      "anchor":"#edit-a-test",
      "redirectURL":"api/v1/synthetics/#edit-a-test"
   },
   {
      "anchor":"#get-the-most-recent-results",
      "redirectURL":"api/v1/synthetics/#get-the-tests-latest-results-summaries-api"
   },
   {
      "anchor":"#synthetics",
      "redirectURL":"api/v1/synthetics/"
   },
   {
      "anchor":"#get-all-tests",
      "redirectURL":"api/v1/synthetics/#get-a-list-of-tests"
   },
   {
      "anchor":"#get-devices-for-browser-checks",
      "redirectURL":"api/v1/synthetics/"
   },
   {
      "anchor":"#delete-tests",
      "redirectURL":"api/v1/synthetics/#delete-tests"
   },
   {
      "anchor":"#get-available-locations",
      "redirectURL":"api/v1/synthetics/"
   },
   {
      "anchor":"#start-or-pause-a-test",
      "redirectURL":"api/v1/synthetics/#pause-or-start-a-test"
   },
   {
      "anchor":"#service-checks",
      "redirectURL":"api/v1/service-checks/"
   },
   {
      "anchor":"#post-a-check-run",
      "redirectURL":"api/v1/service-checks/"
   },
   {
      "anchor":"#rate-limiting",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#screenboards",
      "redirectURL":"api/v1/screenboards/"
   },
   {
      "anchor":"#add-items-to-a-dashboard-list",
      "redirectURL":"api/v2/dashboard-lists/#add-items-to-a-dashboard-list"
   },
   {
      "anchor":"#delete-a-dashboard-list",
      "redirectURL":"api/v1/dashboard-lists/#delete-a-dashboard-list"
   },
   {
      "anchor":"#update-a-dashboard-list",
      "redirectURL":"api/v1/dashboard-lists/#update-a-dashboard-list"
   },
   {
      "anchor":"#create-a-dashboard-list",
      "redirectURL":"api/v1/dashboard-lists/#create-a-dashboard-list"
   },
   {
      "anchor":"#delete-items-from-a-dashboard-list",
      "redirectURL":"api/v2/dashboard-list/#delete-items-from-a-dashboard-list"
   },
   {
      "anchor":"#get-a-dashboard-list",
      "redirectURL":"api/v2/dashboard-lists/#get-a-dashboard-list"
   },
   {
      "anchor":"#get-items-of-a-dashboard-list",
      "redirectURL":"api/v2/dashboard-lists/#get-a-dashboard-list"
   },
   {
      "anchor":"#get-all-dashboard-lists",
      "redirectURL":"api/v1/dashboard-lists/#get-all-dashboard-lists"
   },
   {
      "anchor":"#update-items-of-a-dashboard-list",
      "redirectURL":"api/v2/dashboard-lists/#update-items-of-a-dashboard-list"
   },
   {
      "anchor":"#dashboard-lists",
      "redirectURL":"api/v1/dashboard-lists"
   },
   {
      "anchor":"#update-role",
      "redirectURL":"api/v2/roles/#update-a-role"
   },
   {
      "anchor":"#add-user-to-role",
      "redirectURL":"api/v2/roles/#add-a-user-to-a-role"
   },
   {
      "anchor":"#roles",
      "redirectURL":"api/v2/roles"
   },
   {
      "anchor":"#assign-permissions-to-a-role",
      "redirectURL":"api/v1/roles/#grant-permission-to-a-role"
   },
   {
      "anchor":"#remove-user",
      "redirectURL":"api/v2/roles/#remove-a-user-from-a-role"
   },
   {
      "anchor":"#get-permissions",
      "redirectURL":"api/v2/roles/#list-permissions"
   },
   {
      "anchor":"#get-all-roles",
      "redirectURL":"api/v2/roles/#list-roles"
   },
   {
      "anchor":"#get-permissions-role",
      "redirectURL":"api/v2/roles/#list-permissions-for-a-role"
   },
   {
      "anchor":"#delete-role",
      "redirectURL":"api/v2/roles/#delete-role"
   },
   {
      "anchor":"#get-all-users",
      "redirectURL":"api/v2/roles/#get-all-users-of-a-role"
   },
   {
      "anchor":"#revoke-permission",
      "redirectURL":"api/v2/roles/#revoke-permission"
   },
   {
      "anchor":"#create-role",
      "redirectURL":"api/v2/roles/#create-role"
   },
   {
      "anchor":"#get-one-role",
      "redirectURL":"api/v2/roles/#get-a-role"
   },
   {
      "anchor":"#get-hourly-usage-for-fargate",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-fargate"
   },
   {
      "anchor":"#get-daily-usage-attribution-file-url",
      "redirectURL":"api/v1/usage-metering"
   },
   {
      "anchor":"#get-hourly-usage-for-network-flows",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-network-flows"
   },
   {
      "anchor":"#get-hourly-usage-for-app-analytics",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-hosts-and-containers",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-hosts-and-containers"
   },
   {
      "anchor":"#get-usage-across-your-multi-org-account",
      "redirectURL":"api/v1/usage-metering/#get-usage-across-your-multi-org-account"
   },
   {
      "anchor":"#get-hourly-usage-for-lambda",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-lambda"
   },
   {
      "anchor":"#get-hourly-usage-for-synthetics-browser",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-synthetics-browser-checks"
   },
   {
      "anchor":"#usage-metering",
      "redirectURL":"api/v1/usage-metering/"
   },
   {
      "anchor":"#get-hourly-usage-for-rum-sessions",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-rum-sessions"
   },
   {
      "anchor":"#get-hourly-usage-for-custom-metrics",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-custom-metrics"
   },
   {
      "anchor":"#get-top-500-custom-metrics-by-hourly-average",
      "redirectURL":"api/v1/usage-metering/#get-top-500-custom-metrics-by-hourly-average"
   },
   {
      "anchor":"#get-hourly-usage-for-logs-by-index",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-logs-by-index"
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
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-logs"
   },
   {
      "anchor":"#get-monthly-usage-attribution-available-files",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-synthetics-api",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-synthetics-api-checks"
   },
   {
      "anchor":"#get-hourly-usage-for-analyzed-logs",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#get-hourly-usage-for-network-hosts",
      "redirectURL":"api/v1/usage-metering/#get-hourly-usage-for-network-hosts"
   },
   {
      "anchor":"#troubleshooting",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#integration-aws-logs",
      "redirectURL":"api/v1/aws-logs-integration/"
   },
   {
      "anchor":"#check-aws-lambda",
      "redirectURL":"api/v1/aws-logs-integration/#check-that-an-aws-lambda-function-exists"
   },
   {
      "anchor":"#list-all-aws-logs-integrations",
      "redirectURL":"api/v1/aws-logs-integration/#list-all-aws-logs-integrations"
   },
   {
      "anchor":"#delete-an-aws-logs-integration",
      "redirectURL":"api/v1/aws-logs-integration/#delete-an-aws-logs-integration"
   },
   {
      "anchor":"#get-list-of-aws-log-ready-services",
      "redirectURL":"api/v1/aws-logs-integration/#get-list-of-aws-log-ready-services"
   },
   {
      "anchor":"#add-aws-log-lambda-arn",
      "redirectURL":"api/v1/aws-logs-integration/#add-aws-log-lambda-arn"
   },
   {
      "anchor":"#enable-an-aws-logs-integration",
      "redirectURL":"api/v1/aws-logs-integration/#enable-an-aws-logs-integration"
   },
   {
      "anchor":"#check-aws-services",
      "redirectURL":"api/v1/aws-logs-integration/#check-permissions-for-log-services"
   },
   {
      "anchor":"#add-aws-log-arn",
      "redirectURL":"api/v1/ws-logs-integration/#add-aws-log-lambda-arn"
   },
   {
      "anchor":"#update-host-tags",
      "redirectURL":"api/v1/tags/#update-host-tags"
   },
   {
      "anchor":"#get-tags",
      "redirectURL":"api/v1/tags/#get-tags"
   },
   {
      "anchor":"#remove-host-tags",
      "redirectURL":"api/v1/tags/#remove-host-tags"
   },
   {
      "anchor":"#add-tags-to-a-host",
      "redirectURL":"api/v1/tags/#add-tags-to-a-host"
   },
   {
      "anchor":"#get-host-tags",
      "redirectURL":"api/v1/tags/#get-host-tags"
   },
   {
      "anchor":"#tags",
      "redirectURL":"api/v1/tags"
   },
   {
      "anchor":"#timeboards",
      "redirectURL":"api/v1/timeboards"
   },
   {
      "anchor":"#edit-an-api-key",
      "redirectURL":"api/v1/key-management/#edit-an-api-key"
   },
   {
      "anchor":"#key-management",
      "redirectURL":"api/v1/key-management"
   },
   {
      "anchor":"#get-an-application-key",
      "redirectURL":"api/v1/key-management/#get-an-application-key"
   },
   {
      "anchor":"#create-an-api-key",
      "redirectURL":"api/v1/key-management/#create-an-application-key"
   },
   {
      "anchor":"#delete-an-api-key",
      "redirectURL":"api/v1/key-management/#delete-an-application-key"
   },
   {
      "anchor":"#get-all-api-keys",
      "redirectURL":"api/v1/key-management/#get-all-api-keys"
   },
   {
      "anchor":"#edit-an-application-key",
      "redirectURL":"api/v1/key-management/#edit-an-application-key"
   },
   {
      "anchor":"#get-an-api-key",
      "redirectURL":"api/v1/key-management/#get-api-key"
   },
   {
      "anchor":"#delete-an-application-key",
      "redirectURL":"api/v1/key-management/#delete-an-application-key"
   },
   {
      "anchor":"#create-an-application-key",
      "redirectURL":"api/v1/key-management/#create-an-application-key"
   },
   {
      "anchor":"#get-all-application-keys",
      "redirectURL":"api/v1/key-management/#get-all-application-keys"
   },
   {
      "anchor":"#list-namespace-rules",
      "redirectURL":"api/v1/aws-integration/#list-namespace-rules"
   },
   {
      "anchor":"#create-an-aws-integration",
      "redirectURL":"api/v1/aws-integration/#create-an-aws-integration"
   },
   {
      "anchor":"#list-all-aws-integrations",
      "redirectURL":"api/v1/aws-integration/#list-all-aws-integrations"
   },
   {
      "anchor":"#integration-aws",
      "redirectURL":"api/v1/aws-integration"
   },
   {
      "anchor":"#update-an-aws-integration",
      "redirectURL":"api/v1/aws-integration/#update-an-aws-integration"
   },
   {
      "anchor":"#generate-external-ids",
      "redirectURL":"api/v1/aws-integration/#generate-a-new-external-id"
   },
   {
      "anchor":"#delete-an-aws-integration",
      "redirectURL":"api/v1/aws-integration/#delete-an-aws-integration"
   },
   {
      "anchor":"#logs",
      "redirectURL":"api/v1/logs"
   },
   {
      "anchor":"#send-logs-over-http",
      "redirectURL":"api/v1/logs/#send-logs"
   },
   {
      "anchor":"#list-logs",
      "redirectURL":"api/v1/logs/#get-a-list-of-logs"
   },
   {
      "anchor":"#update-a-pipelines",
      "redirectURL":"api/v1/logs-pipelines/#update-a-pipeline"
   },
   {
      "anchor":"#get-all-pipelines",
      "redirectURL":"api/v1/logs-pipelines/#get-all-pipelines"
   },
   {
      "anchor":"#delete-a-pipeline",
      "redirectURL":"api/v1/logs-pipelines/#delete-a-pipeline"
   },
   {
      "anchor":"#create-a-pipeline",
      "redirectURL":"api/v1/logs-pipelines/#create-a-pipeline"
   },
   {
      "anchor":"#logs-pipelines",
      "redirectURL":"api/v1/logs-pipelines"
   },
   {
      "anchor":"#get-a-pipelines",
      "redirectURL":"api/v1/logs-pipelines/#get-a-pipeline"
   },
   {
      "anchor":"#get-pipelines-order",
      "redirectURL":"api/v1/logs-pipelines/#get-pipeline-order"
   },
   {
      "anchor":"#update-pipelines-order",
      "redirectURL":"api/v1/logs-pipelines/#update-pipeline-order"
   },
   {
      "anchor":"#get-a-dashboard",
      "redirectURL":"api/v1/dashboards/#get-a-dashboard"
   },
   {
      "anchor":"#create-a-dashboard",
      "redirectURL":"api/v1/dashboards/#create-a-dashboard"
   },
   {
      "anchor":"#get-all-dashboards",
      "redirectURL":"api/v1/dashboards/#get-all-dashboards"
   },
   {
      "anchor":"#dashboards",
      "redirectURL":"api/v1/dashboards"
   },
   {
      "anchor":"#delete-a-dashboard",
      "redirectURL":"api/v1/dashboards/#delete-a-dashboard"
   },
   {
      "anchor":"#update-a-dashboard",
      "redirectURL":"api/v1/dashboards/#update-a-dashboard"
   },
   {
      "anchor":"#get-a-monitor-downtime",
      "redirectURL":"api/v1/downtimes/#get-a-downtime"
   },
   {
      "anchor":"#schedule-monitor-downtime",
      "redirectURL":"api/v1/downtimes/#schedule-a-downtime"
   },
   {
      "anchor":"#cancel-monitor-downtime-by-scope",
      "redirectURL":"api/v1/downtimes/#cancel-downtime-by-scope"
   },
   {
      "anchor":"#downtimes",
      "redirectURL":"api/v1/downtimes/"
   },
   {
      "anchor":"#get-all-monitor-downtimes",
      "redirectURL":"api/v1/downtimes/#get-all-downtimes"
   },
   {
      "anchor":"#cancel-monitor-downtime",
      "redirectURL":"api/v1/downtimes/#cancel-a-downtime"
   },
   {
      "anchor":"#update-monitor-downtime",
      "redirectURL":"api/v1/downtimes/#update-a-downtime"
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
      "anchor":"#get-a-user-invitation",
      "redirectURL":"api/v2/users/#get-a-user-invitation"
   },
   {
      "anchor":"#users",
      "redirectURL":"api/v1/users/"
   },
   {
      "anchor":"#get-user",
      "redirectURL":"api/v1/users/#get-user-details"
   },
   {
      "anchor":"#get-a-user-permission-set",
      "redirectURL":"api/v2/users/#get-a-user-permissions"
   },
   {
      "anchor":"#get-a-user-organisation",
      "redirectURL":"api/v2/users/#get-a-user-organization"
   },
   {
      "anchor":"#send-invitation-email-to-a-user",
      "redirectURL":"api/v2/users/#send-invitation-email"
   },
   {
      "anchor":"#get-a-custom-variable-for-webhooks",
      "redirectURL":"api/v1/webhooks-integration/#get-a-custom-variable"
   },
   {
      "anchor":"#create-a-custom-variable-for-webhooks",
      "redirectURL":"api/v1/webhooks-integration/#create-a-custom-variable"
   },
   {
      "anchor":"#get-a-webhook-for-webhooks-integration",
      "redirectURL":"api/v1/webhooks-integration/#get-a-webhook-integration"
   },
   {
      "anchor":"#integration-webhooks",
      "redirectURL":"api/v1/webhooks-integration/"
   },
   {
      "anchor":"#create-a-webhook-for-webhooks-integration",
      "redirectURL":"api/v1/webhooks-integration/#create-a-webhooks-integration"
   },
   {
      "anchor":"#update-a-custom-variable-for-webhooks-integration",
      "redirectURL":"api/v1/webhooks-integration/#update-a-custom-variable"
   },
   {
      "anchor":"#delete-a-custom-variable-for-webhooks-integration",
      "redirectURL":"api/v1/webhooks-integration/#delete-a-custom-variable"
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
      "redirectURL":"api/v1/webhooks-integration/#delete-a-custom-variable"
   },
   {
      "anchor":"#host-totals",
      "redirectURL":"api/v1/hosts/#get-the-total-number-of-active-hosts"
   },
   {
      "anchor":"#unmute-a-host",
      "redirectURL":"api/v1/hosts/#unmute-a-host"
   },
   {
      "anchor":"#search-hosts",
      "redirectURL":"api/v1/hosts/#get-all-hosts-for-your-organization"
   },
   {
      "anchor":"#mute-a-host",
      "redirectURL":"api/v1//hosts/#mute-a-host"
   },
   {
      "anchor":"#hosts",
      "redirectURL":"api/v1/hosts/"
   },
   {
      "anchor":"#graph-snapshot",
      "redirectURL":"api/v1/snapshots/"
   },
   {
      "anchor":"#graphs",
      "redirectURL":"api/v1/snapshots/"
   },
   {
      "anchor":"#delete-an-azure-integration",
      "redirectURL":"api/v1/azure-integration/#delete-an-azure-integration"
   },
   {
      "anchor":"#list-all-azure-integrations",
      "redirectURL":"api/v1/azure-integration/#list-all-azure-integrations"
   },
   {
      "anchor":"#update-an-azure-integration-host-filters",
      "redirectURL":"api/v1/azure-integration/#update-azure-integration-host-filters"
   },
   {
      "anchor":"#update-azure-integration",
      "redirectURL":"api/v1/azure-integration/#update-an-azure-integration"
   },
   {
      "anchor":"#integration-azure",
      "redirectURL":"api/v1/azure-integration/"
   },
   {
      "anchor":"#create-an-azure-integration",
      "redirectURL":"api/v1/azure-integration/#create-an-azure-integration"
   },
   {
      "anchor":"#revoke-embed",
      "redirectURL":"api/v1/embeddable-graphs/#revoke-embed"
   },
   {
      "anchor":"#enable-embed",
      "redirectURL":"api/v1/embeddable-graphs/#enable-embed"
   },
   {
      "anchor":"#get-all-embeds",
      "redirectURL":"api/v1/embeddable-graphs/#get-all-embeds"
   },
   {
      "anchor":"#embeddable-graphs",
      "redirectURL":"api/v1/embeddable-graphs/"
   },
   {
      "anchor":"#get-specific-embed",
      "redirectURL":"api/v1/embeddable-graphs/#get-specific-embed"
   },
   {
      "anchor":"#create-embed",
      "redirectURL":"api/v1/embeddable-graphs/#create-embed"
   },
   {
      "anchor":"#get-indexes-order",
      "redirectURL":"api/v1/logs-indexes/#get-indexes-order"
   },
   {
      "anchor":"#logs-indexes",
      "redirectURL":"api/v1/logs-indexes/"
   },
   {
      "anchor":"#get-all-indexes",
      "redirectURL":"api/v1/logs-indexes/#get-all-indexes"
   },
   {
      "anchor":"#update-an-index",
      "redirectURL":"api/v1/logs-indexes/#update-an-index"
   },
   {
      "anchor":"#update-indexes-order",
      "redirectURL":"api/v1/logs-indexes/#update-indexes-order"
   },
   {
      "anchor":"#get-an-index",
      "redirectURL":"api/v1/logs-indexes/#get-an-index"
   },
   {
      "anchor":"#query-the-event-stream",
      "redirectURL":"api/v1/events/#query-the-event-stream"
   },
   {
      "anchor":"#get-an-event",
      "redirectURL":"api/v1/events/#get-an-event"
   },
   {
      "anchor":"#events",
      "redirectURL":"api/v1/events/"
   },
   {
      "anchor":"#post-an-event",
      "redirectURL":"api/v1/events/#post-an-event"
   },
   {
      "anchor":"#overview",
      "redirectURL":"api/v1/"
   },
   {
      "anchor":"#service-level-objectives",
      "redirectURL":"api/v1/service-level-objectives/"
   },
   {
      "anchor":"#delete-a-service-level-objective",
      "redirectURL":"api/v1/service-level-objectives/#delete-a-slo"
   },
   {
      "anchor":"#edit-a-slo",
      "redirectURL":"api/v1/service-level-objectives/#update-a-slo"
   },
   {
      "anchor":"#bulk-delete-slo-timeframes",
      "redirectURL":"api/v1/service-level-objectives/#bulk-delete-slo-timeframes"
   },
   {
      "anchor":"#search-service-level-objectives",
      "redirectURL":"api/v1/service-level-objectives/#search-slos"
   },
   {
      "anchor":"#delete-a-slo",
      "redirectURL":"/v1/service-level-objectives/#delete-a-slo"
   },
   {
      "anchor":"#edit-a-service-level-objective",
      "redirectURL":"api/v1/service-level-objectives/#update-a-slo"
   },
   {
      "anchor":"#create-a-slo",
      "redirectURL":"api/v1/service-level-objectives/#create-a-slo-object"
   },
   {
      "anchor":"#get-a-slo-s-details",
      "redirectURL":"api/v1/service-level-objectives/#get-a-slos-details"
   },
   {
      "anchor":"#get-an-slo-s-history",
      "redirectURL":"api/v1/service-level-objectives/#get-an-slos-history"
   },
   {
      "anchor":"#create-a-service-level-objective",
      "redirectURL":"api/v1/service-level-objectives/#create-a-slo-object"
   },
   {
      "anchor":"#delete-many-service-level-objectives",
      "redirectURL":"api/v1/service-level-objectives/#delete-a-slo"
   },
   {
      "anchor":"#get-a-service-level-objective-s-details",
      "redirectURL":"api/v1/service-level-objectives/#get-a-slos-details"
   },
   {
      "anchor":"#get-a-service-level-objective-s-history",
      "redirectURL":"api/v1/service-level-objectives/#get-an-slos-history"
   },
   {
      "anchor":"#delete-multiple-slos",
      "redirectURL":"api/v1/service-level-objectives/#delete-a-slo"
   },
   {
      "anchor":"#bulk-delete-service-level-objectives-time-frames",
      "redirectURL":"api/v1/service-level-objectives/#bulk-delete-slo-timeframes"
   },
   {
      "anchor":"#can-delete-a-service-level-objective-s",
      "redirectURL":"api/v1/service-level-objectives/#check-if-slos-can-be-safely-deleted"
   },
   {
      "anchor":"#search-slo-s",
      "redirectURL":"api/v1/service-level-objectives/#search-slos"
   },
   {
      "anchor":"#check-if-a-slo-can-be-deleted",
      "redirectURL":"api/v1/service-level-objectives/#check-if-slos-can-be-safely-deleted"
   },
   {
      "anchor":"#delete-a-pagerduty-service",
      "redirectURL":"api/v1/pagerduty-integration/#delete-a-single-service-object"
   },
   {
      "anchor":"#update-a-pagerduty-service",
      "redirectURL":"api/v1/pagerduty-integration/#update-a-single-service-object"
   },
   {
      "anchor":"#get-a-pagerduty-service",
      "redirectURL":"api/v1/pagerduty-integration/#get-a-single-service-object"
   },
   {
      "anchor":"#integration-pagerduty",
      "redirectURL":"api/v1/pagerduty-integration/"
   },
   {
      "anchor":"#delete-a-pagerduty-service",
      "redirectURL":"api/v1/pagerduty-integration/#delete-a-single-service-object"
   },
   {
      "anchor":"#add-a-pagerduty-service",
      "redirectURL":"api/v1/pagerduty-integration/#create-a-new-service-object"
   },
   {
      "anchor":"#query-associated-to-a-role",
      "redirectURL":"api/v2/logs-restriction-queries/#get-restriction-query-for-a-given-role"
   },
   {
      "anchor":"#query-associated-to-a-user",
      "redirectURL":"api/v2/logs-restriction-queries/#get-all-restriction-queries-for-a-given-user"
   },
   {
      "anchor":"#get-one-restriction-query",
      "redirectURL":"api/v2/logs-restriction-queries/#get-a-restriction-query"
   },
   {
      "anchor":"#remove-a-restriction-query-from-a-role",
      "redirectURL":"api/v2/logs-restriction-queries/#revoke-role-from-a-restriction-query"
   },
   {
      "anchor":"#delete-a-restriction-query",
      "redirectURL":"api/v2/logs-restriction-queries/#delete-a-restriction-query"
   },
   {
      "anchor":"#update-a-restriction-query",
      "redirectURL":"api/v2/logs-restriction-queries/#update-a-restriction-query"
   },
   {
      "anchor":"#associate-a-role-with-a-restriction-query",
      "redirectURL":"api/v2/logs-restriction-queries/#grant-role-to-a-restriction-query"
   },
   {
      "anchor":"#restriction-queries",
      "redirectURL":"api/v2/logs-restriction-queries/"
   },
   {
      "anchor":"#create-a-restriction-query",
      "redirectURL":"api/v2/logs-restriction-queries/#create-a-restriction-query"
   },
   {
      "anchor":"#get-all-restriction-queries",
      "redirectURL":"api/v2/logs-restriction-queries/#get-all-restriction-queries-for-a-given-user"
   }
]

export default redirectUrls;
